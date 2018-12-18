---
title: 关于Hexo踩了的坑
date: 2017-07-21 23:29:27
categories: [技术向]
tags: [Hexo,Github]
---


# 记录两个很难受的问题

------

> ### Hexo出现Script load failed

>> 尝试了多次初始化hexo、修改config文件都无法解决，之后发现原来是**Node.js不支持ES6**，才导致引入js文件失败。
>> 赶紧node -v了一下，果然版本4.x，底得可怕，升级到8.x之后再次`hexo s --debug`就没有load failed了。

> ### Tags页和Categories页不能显示所有的tag或category

>> 网上找了很多地方，什么tags: [标签1,标签2,标签3]等等都试过了，还是不对，最后在知乎的一个小角落发现一个3赞的答案的评论里找到了解决方法...
>> 在tags的文件夹里的index.md里加上：
>>    `type: "tags"`
>>    `layout: "tags"`
>>    即可


>  其他一些小问题很好解决，顺道熟悉了一遍npm和git，美滋滋。


------