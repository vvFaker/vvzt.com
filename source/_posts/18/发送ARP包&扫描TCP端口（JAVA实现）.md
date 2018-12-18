---
title: 发送ARP包&扫描TCP端口（JAVA实现）
date: 2018-1-1 14:52:02
categories: [技术向]
tags: [JAVA,Jpacp]
---

# 发送ARP包&扫描TCP端口（JAVA实现）


---
## 发送ARP包

> 这里我们要用到 Jpcap（[文档][1]）
> Jpcap 调用 WinPcap，从而给 JAVA 提供一个接口，实现对数据链路层的操作。
> 那么我们就可以使用 Jpcap 实现 ARP 包的封装、发送、接收

>  1. 获取接口列表并选择接口
>  2. **封装** ARP 包
>  3. **发送** ARP 包
>  4. 监听并**接收** ARP 包，判断包的目的地址，从而确定是否是响应包
>  5. 输出包的各个字段的内容

<br>
Code:

```

package test;

import java.io.IOException;
import java.net.InetAddress;
import java.util.*;

import jpcap.*;
import jpcap.packet.ARPPacket;
import jpcap.packet.EthernetPacket;
import jpcap.packet.Packet;  
  
public class arp {
	public static void main(String[] args) throws IOException{
    	ARPPacket result;
    	if(args.length != 4) {
    		result = ARP("192.168.163.110", "00-50-56-c0-00-08", "192.168.163.130",  "00-0c-29-da-e3-ad");
    	}
    	else {
    		result = ARP(args[0], args[1], args[2], args[3]);
    	}
    	System.out.println(result);
    	printPacket(result);
    	return;
    }
	
	public static ARPPacket ARP(String sIP, String sMAC, String dIP, String dMAC) throws IOException{
		NetworkInterface[] devices = JpcapCaptor.getDeviceList(); // 获得接口列表
    	NetworkInterface device =  null;
    	System.out.println("接口列表：");
    	for(int i=0; i<devices.length; i++) {
    		System.out.print(i + ". " + devices[i].description + "  | MAC= ");
    		StringBuffer comp = new StringBuffer();
    		for(int j=0; j<devices[i].mac_address.length; j++) { 
    			if(j!=0) {
    				comp.append("-");
    			}
    			// 需要把byte转成16进制
    			String conv = Integer.toHexString(devices[i].mac_address[j]  & 0xFF);
    			comp.append(conv.length()<2?"0"+conv:conv); // 填满2位
    		} // 遍历mac_address获取MAC地址
    		System.out.println(comp);
    		if(comp.toString().equals(sMAC)){
    			device = devices[i];
    		}
    	}
    	if(device == null) {
    		System.out.println("没有对应的网卡");
    		System.exit(1);
    	}

    	System.out.println("已选择： " + device.description);

		JpcapCaptor captor = JpcapCaptor.openDevice(device,65535,false,2000);
		// （网卡对象、一次性要抓取数据包的最大长度、混杂模式、超时时间）
		
		JpcapSender sender = captor.getJpcapSenderInstance(); // 发送器
		InetAddress sourceIP = InetAddress.getByName(sIP);
		InetAddress destinationIP = InetAddress.getByName(dIP);

		ARPPacket arp = new ARPPacket();
		arp.hardtype = ARPPacket.HARDTYPE_ETHER; // 硬件类型
		arp.prototype = ARPPacket.PROTOTYPE_IP; // 协议类型
		arp.operation = ARPPacket.ARP_REQUEST; // 指明是ARP包
		arp.hlen = 6; // 物理地址长度
		arp.plen = 4; // 协议地址长度
		arp.sender_hardaddr = device.mac_address;
		arp.sender_protoaddr = sourceIP.getAddress();
		
		String mac = new String(dMAC);
		String[] _mac = mac.split("-");
		byte[] _dMAC = new byte[6];
		for(int i=0; i<_dMAC.length; i++) {
			// System.out.print((byte) Integer.parseInt(_dMAC[i], 16) + "/");
			_dMAC[i] = (byte) Integer.parseInt(_mac[i], 16);
			// 把目标MAC地址从string转成byte
		}

		arp.target_hardaddr = _dMAC;
		arp.target_protoaddr = destinationIP.getAddress();
		
		// 构造帧头
		EthernetPacket ether = new EthernetPacket();
		ether.frametype = EthernetPacket.ETHERTYPE_ARP;
		ether.src_mac = device.mac_address; // 源MAC地址
		ether.dst_mac = _dMAC; // 目的MAC地址
		arp.datalink = ether; // 设置ARP数据链路层的帧
		
		sender.sendPacket(arp);
		System.out.println("包已发送......");
		
		long t = System.currentTimeMillis();
		while(true) {
			Packet p = captor.getPacket();
			if(p instanceof ARPPacket) {
				ARPPacket _p = (ARPPacket) p;
				if(_p == null) {
					System.out.println(destinationIP + "不在局域网内");
					System.exit(1);
				}
				if(Arrays.equals(_p.target_protoaddr, sourceIP.getAddress())) {
					System.out.println("OK");
					return _p;
				}
			}
			else if (System.currentTimeMillis() - t > 10*800) { // 等待超过8秒就gg
				System.out.println("!!! 等待超时");
				System.exit(1);
			}
		}
	}
	public static void printPacket(ARPPacket p) {
		byte[] header = p.header;
		// 目标IP+MAC   源IP+MAC
		String destinationIP = p.getTargetProtocolAddress().toString();
		String destinationMAC = p.getTargetHardwareAddress().toString();
		String sourceIP = p.getSenderProtocolAddress().toString();
		String sourceMAC = p.getSenderHardwareAddress().toString();
		
		short operation = p.operation; // 操作类型 1请求 2应答
		short protocolAddressLength = p.plen; // 协议地址长度
		short hardwareAddressLength = p.hlen; // 硬件地址长度
		short etherType = p.prototype; // 协议类型 0x0800表示IP地址类型
		short hardwareType = p.hardtype; // 硬件类型 1表示以太网地址
		
		System.out.println("----------ARP字段----------");
		System.out.println("  /-------ARP头部-------\\  ");
		System.out.println("ar_hrd  硬件类型:\t" + hardwareType);
		System.out.println("ar_pro  协议类型:\t" + etherType);
		System.out.println("ar_hln  硬件地址长度 :\t" + hardwareAddressLength);
		System.out.println("ar_pln  协议地址长度:\t" + protocolAddressLength);
		System.out.println("ar_op   操作类型:\t" + operation);
		System.out.println("  \\_____________________/  ");
		System.out.println("arp_tpa  目标IP:\t\t" + destinationIP);
		System.out.println("arp_tha  目标MAC:\t" + destinationMAC);
		System.out.println("arp_spa  源IP:\t\t" + sourceIP);
		System.out.println("arp_sha  源MAC:\t\t" + sourceMAC);
		System.out.println("---------------------------");
	}
}  


```


-------------


## 扫描TCP端口

> 使用 Socket 连接判断是否为TCP端口

>  1. 获取接口列表并选择接口
>  2. **Socket** 连接
>  3. 保存连接成功的端口号
>  4. 扫描完毕后输出所有保存的端口号
>  
>  but
>  这样的话太慢了，65535 个端口扫描完不知道什么时候了
>  所以我们加上多线程
>  <br>
>  5. 加入**多线程**，实测 1500 线程 40 - 50 秒左右扫描完所有端口
>  
>  但是
>  会出现重复扫描同一端口的问题
>  那么就还需要加入互斥锁，对操作进行同步
>  <br>
>  6. 加入**互斥锁**，对操作进行同步


<br>
Code:

```

package test2;

import java.io.IOException;
import java.net.Socket;
import java.util.*;
import java.util.concurrent.locks.*;

import jpcap.*;


public class scan{
	public static void main(String args[]) throws IOException {
		if(args.length != 1) {
			new TcpConnection("127.0.0.1", 1500);
		}
		else {
			new TcpConnection(args[0], 1500);
		}
		return;
	}
}

class TcpConnection{
	public TcpConnection(String add, int MAX_THREAD) throws IOException {
		this.MAX_THREAD = MAX_THREAD;
		this.scanPorts(add);
	}
	private int MAX_THREAD; // 最大线程数
	private data result = new data();
	
	
	public void scanPorts(String hostAddress) throws IOException {
		NetworkInterface[] devices = JpcapCaptor.getDeviceList();
		for(int i=0; i<devices.length; i++) {
			System.out.println(i + ". " + devices[i].description);
		}
		NetworkInterface device = devices[0];
		System.out.println("已选用" + device.description + "\n...\n");
		JpcapCaptor captor = JpcapCaptor.openDevice(device, 2333, false, 2000);
		// （网卡对象、一次性要抓取数据包的最大长度、混杂模式、超时时间）
		
		List<Test> threads = new ArrayList<Test>(); // 用于存储线程
		for(int i=0; i<this.MAX_THREAD; i++) {
			Test test = new Test(hostAddress, result, 0, 65535);
			threads.add(test);
			test.start();
		} // 创建多线程
		
		for(int i=0; i<this.MAX_THREAD; i++) {
			try {
				((Thread) threads.get(i)).join();
			} catch (InterruptedException e) {
				// e.printStackTrace();
			}
			// System.out.println("第" + i + "个线程结束");
		} // 等待线程结束
		
		System.out.println("\n\n\n-----TCP端口-----");
		
		Collections.sort(this.result.getList());
		for(int i=0; i<this.result.getList().size(); i++) {
			System.out.println(hostAddress + ": " + this.result.getList().get(i));
		}
	}
	
}
class Test extends Thread{
	private String hostAddress;
	private data data;
	private int MIN_PORT;
	private int MAX_PORT;
	public Test(String hostAddress,  data data, int MIN_PORT, int MAX_PORT) {
		this.hostAddress = hostAddress;
		this.data = data;
		this.MIN_PORT = MIN_PORT;
		this.MAX_PORT = MAX_PORT;
	}
	public void run(){
		while(this.data.getIndex() >= MIN_PORT  && this.data.getIndex() < MAX_PORT) {
			//----------------互斥---------------
			this.data.P();
			int i = this.data.getIndex();
			this.data.indexAdd();
			this.data.V();
			// -----------------------------------
			try {
				Socket s = new Socket(this.hostAddress, i);
				s.close();
				this.data.getList().add(i); // 加入结果集合中
				// System.out.println(i + " :true !!!");
			}
			catch(IOException e) {
				// System.out.println(i + " :false");
			}
			if(i % 10000 == 0) System.out.println(">" + ((float)i/65535)*100 + "% ");
			if(i == 65534) System.out.println(">100% ");
		}
		
	}
}
class data{
	private Lock lock = new ReentrantLock(); // 锁对象
	private List<Integer> list = new ArrayList<Integer>();
	private int index = 0;
	public int getIndex() {
		return this.index;
	}
	public void indexAdd(){
		this.index += 1;
	}
	public void indexSub() {
		this.index -= 1;
	}
	public List<Integer> getList() {
		return this.list;
	}
	public void P() {
		lock.lock();
	}
	public void V() {
		lock.unlock();
	}
}

```
------

## 溜了溜了..


  [1]: http://jpcap.sourceforge.net/javadoc/