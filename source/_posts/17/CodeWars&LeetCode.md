---
title: 练题记录（持续更新）
date: 2017-09-30 21:04:24
categories: [技术向]
tags: [JavaScript,CodeWars,LeetCode]
---

# 我的[CodeWars][1] / LeetCode笔记
## ![codewars' honor][2]
## （记录部分题目）
-------------------------
-------------------------

# (4kyu)(JavaScrip) [Born to be chained][3]

> * 大概意思就是要实现链式调用，如：

```
function chain(fns) {
}
var c = chain({sum: sum, minus: minus, double: double, addOne: addOne});

var c1 = c.sum(1, 2);
c1.execute(); // == fns.sum(1, 2) == 3
c1.double().execute(); // == fns.double(fns.sum(1, 2)) == 6
c1.addOne().execute(); // == fns.addOne(fns.sum(1, 2)) == 4
c1.execute(); // == fns.sum(1, 2) == 3

var c2 = c1.sum(5);
c2.addOne().execute(); // == fns.addOne(fns.sum(fns.sum(1, 2) 5)) == 9
c2.sum(3).execute(); // == fns.sum(c1.sum(fns.sum(1, 2), 5), 3) == 11
c2.execute(); // == fns.sum(fns.sum(1, 2), 5) == 8
c1.execute(); // == fns.sum(1, 2) == 3
```

> 1. 看懂题目
> 2. 理清思路
> 3. 开始上手
> 4. 排错提交

-------------------
> 下面是最终代码

```
function chain(fns) {
    let p = {};
    p.value = null;
    Object.keys(fns).map(x=>{
      p[x] = function(){
        let arr = [], _this = {};
        Object.assign(_this,this);
        if(this.value !== null) arr.push(this.value);
        for(let arg of arguments)
          arr.push(arg);
        if(x === 'double' || x === 'addOne')
          _this.value = fns[x](_this.value);
        else
          _this.value = fns[x](...arr);
        return _this;
      }
    });
    p.execute = function(){
        return this.value;
    }
    return p;
  }
```

>  **思路**：
>> 1 p.value保存计算后的值
>> 2 遍历fns的键名
>> 3 复制对象后进行计算（若对原对象直接操作会这样：
>> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c1 = c.sum(4,5); c2 = c1.sum(5)  c1.execute() //14
>> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所以assign后再对新的对象进行操作并return）
>> 4 判断double与addOne，是因为这两个只需要传入一个参数
>> 5 p.execute 直接返回计算结果


## Born to be chained //

---------------------------------------------

---------------------------------------------
# (3kyu)(JavaScrip) [Can you get the loop ?][4]

> * ![题目][5]
> * 如图，第一个圆即为给定的node，需要我们确定最后的loop size
> * （通过node.getNext()或者node.next获得下一个node）

>  **思路A**：
>> 1 给一个计数器c=1
>> 2 遍历每一个node并node.count=c++，即每个node给一个序号
>> 3 当遍历到已经存在node.count的节点时，即找到了环路
>> 4 用计数器c减去node.count即得到环的大小即loop size
>> 5 最后再遍历一遍把node.count设置为undefined
>> 6 这个方法有点投机取巧了，嘿嘿嘿，（溜了溜了

-----------------

> 投机取巧代码如下
```
function loop_size(node){
  let _node = node;
  let c = 1;
  while(!node.count){
    node.count = c++;
    node = node.next;
  }
  let res = c-node.count;
  while(_node.count){
    _node.count = undefined;
    _node = _node.next;
  }
  return res;
}
```
-----------------------

> 看了别人的代码，感觉标准多了，哈哈

```
function loop_size(node){
  var nodes = [];
  while(nodes.indexOf(node) == -1) {
    nodes.push(node);
    node = node.getNext();
  }
  
  return nodes.length - (nodes.indexOf(node));
}
```

## Can you get the loop ?  //

---------------------------------------------

---------------------------------------------

# (3kyu)(JavaScrip) [Multiplying numbers as strings][6]

> * 题目给了两个内容为纯数字的字符串，要计算其乘积
> * 难点在于给的数字有可能非常大，不能用原生的int类型去直接计算
> * 所以需要自己手搓乘法运算

>  **我的解A**：
>> 1 先把两个字符串拆开
>> 2 用A字符串的单个数字去逐个乘以B字符串的数字并暂存在数组中
>> 3 遍历A字符串并重复步骤2
>> 4 结束遍历后把数组中的所有字符串按位置相加即可
>> （注意数字的进位）

-----------------

> **Shit Code：**
```
function multiply(a, b)
{
  a = a.split('');
  b = b.split('');
  let res = [];
  for(let i=a.length-1; i>=0; i--){
    let rstr = c(b, a[i]); // 用a里的单个数字逐个乘以b的单个数字后相加的值
    res.push(rstr.concat('0'.repeat(a.length-i-1))); // 根据位置在后面补0
  }
  for(let j=1; j<res.length; j++){
    res[0] = d(res[0], res[j]); // 各个位置的值相加得到最后结果
  }
  res[0] = res[0].replace(/\b(0+)/g, ''); // 去掉前面的0
  return res[0].length===0?'0':res[0];
}

function c(arr, char){ // 乘法的部分
  let t = [];
  for(let s=0; s<arr.length; s++)  t.push(Number.parseInt(arr[s])*Number.parseInt(char));
  for(let i=t.length-1; i>=0; i--){
    if(t[i]>=10){
      if(i!==0){
        t[i-1] += ~~(t[i]/10);
        t[i] = t[i]%10;
      }
      else{
        t.unshift(~~(t[i]/10));
        t[1] = t[1]%10;
      }
    }
  }
  return t.join('');
}

function d(str1, str2){ // 加法的部分
  str1 = str1.split('').reverse();
  str2 = str2.split('').reverse();
  let res = [];
  let bstr = str1.length>str2.length?str1:str2;
  let sstr = str1.length>str2.length?str2:str1;
  for(let i=0; i<bstr.length; i++){ // 这里对应位置相加
    if(i<sstr.length){
      bstr[i] = Number.parseInt(str1[i])+Number.parseInt(str2[i]);
    }
  }
  bstr = bstr.reverse().map(x=>Number.parseInt(x)); // 全部转为Integer
  for(let j=bstr.length-1; j>=0; j--){ // 实现进位
    if(bstr[j]>=10){
      if(j===0){
        bstr.unshift(~~(bstr[j]/10));
        bstr[1] = bstr[1]%10;
      }
      else{
        bstr[j-1] += ~~(bstr[j]/10);
        bstr[j] = bstr[j]%10;
      }
    }
  }
  return bstr.join('');
}
```

> 虽然完成了，但是很勉强，花了一个小时，代码感觉有些杂乱，这只是个人的瓜皮暴力解法。

> 慢慢完善，多多学习

> 最后看到别人20行代码解完，心态崩了。（溜了溜了

## Multiplying numbers as strings  //

---------------------------------------------

---------------------------------------------

# (654-Medium)(JAVA) [Maximum Binary Tree][7]



```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode constructMaximumBinaryTree(int[] nums) {
        TreeNode res = new TreeNode(0);
    	fac(0, nums.length-1, res, nums);
		return res;
    }
    public void fac(int left, int right, TreeNode current, int[] nums) {
    	if(left == right) {
    		current.val = nums[left];
    		return;
    	}
    	int mid = left;
    	for(int i=left ; i<=right; i++) {
    		if(current.val < nums[i]) {
    			current.val = nums[i];
    			mid = i;
    		}
    	}
    	if(left == mid) {
    		current.right = new TreeNode(0);
    		fac(mid+1, right, current.right, nums);
    	} else if(right == mid) {
    		current.left = new TreeNode(0);
    		fac(left, mid-1, current.left, nums);
    	} else {
    		current.left = new TreeNode(0);
    		fac(left, mid-1, current.left, nums);
    		current.right = new TreeNode(0);
    		fac(mid+1, right, current.right, nums);
    	}
    }
}
```


## Maximum Binary Tree //




---------------------------------------------

---------------------------------------------

  
  
  


  [1]: https://www.codewars.com/
  [2]: https://www.codewars.com/users/vzt7/badges/large
  [3]: https://www.codewars.com/kata/54c27ef1fb7da0118600046a
  [4]: https://www.codewars.com/kata/can-you-get-the-loop/javascript
  [5]: http://i42.tinypic.com/27wrmed.png
  [6]: https://www.codewars.com/kata/multiplying-numbers-as-strings/train/javascript
  [7]: https://leetcode.com/problems/maximum-binary-tree/