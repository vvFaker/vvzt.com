---
title: git双账号配置
date: 2018-06-6 22:22:36
categories: [技术向]
tags: [git]
---

# git 双账号的配置

由于个人需要所以得配置两个账号，一个 github，一个 gitlib

记录一下过程


## 配置第一个 git 账号


1. 通过 git config 设置账号

```
git config --global user.name "vzt7"
git config --global user.email "vvzt666666@foxmail.com"
```

设置完成后可 git config --list 确认

2. 通过 ssh-keygen 生成密匙

```
ssh-keygen -t rsa -C "vvzt666666@foxmail.com"
```

3. 将生成的公匙添加到 github

进入 **~/.ssh** 目录下将 **id_rsa.pub** 的内容添加到 github ssh 中


## 配置第二个 git 账号

4. 生成密匙

重复 *1.* *2.* 操作

```
git config --global user.name "7tzv"
git config --global user.email "666666tzvv@liamxof.com"

ssh-keygen -t rsa -C "666666tzvv@liamxof.com"
```

提示输入文件名（输入不同的文件名）
```
Enter file in which to save the key (~/.ssh/id_rsa): id_rsa_new
```

5. 让 ssh 识别新密匙

```
ssh-add ~/.ssh/id_rsa_new
```

6. 配置 config 文件

在 **~/.ssh** 目录下新建 **config** 文件并编辑


```
# <config>

# Default user
Host git@github.com
IdentityFile ~/.ssh/id_rsa

# Second user
Host git@gitlib.com
IdentityFile ~/.ssh/id_rsa_new

```

7. 将生成的公匙添加到 gitlib 中

进入 **~/.ssh** 目录下将 **id_rsa_new.pub** 的内容添加到 gitlib ssh 中


## 测试


可使用 ```ssh -T git@xxx.com``` 测试


## Attention

需要注意的是，在 MacOS 下可能需要将 **ssh-add ~/.ssh/id_rsa_new** 添加到 **.bashrc** 或 **.bash_profile** 中，以避免重启后管理私钥的服务重置，也就等于打开 terminal 时自动执行了这条命令。