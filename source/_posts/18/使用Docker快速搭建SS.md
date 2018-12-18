---
title: 使用Docker快速搭建SS
date: 2018-02-21 19:12:38
categories: [技术向]
tags: [Docker,科学上网]
---

# 使用 Docker 配置 ShadowSocks

> 这里用到的是 CentOS 并且已经装好了 Docker



1- pull ss镜像

- docker pull oddrationale/docker-shadowsocks

2- 启动镜像，运行ss

- docker run -d -p 8888:8888 oddrationale/docker-shadowsocks -s 0.0.0.0 -p 8888 -k thekey -m aes-256-cfb
 - （这里启用的是 8888 端口，密码为 thekey）

3- 检查是否启动成功

- docker ps

> 如果已经运行那么就启动成功了！



### 没错 docker 就这么方便~