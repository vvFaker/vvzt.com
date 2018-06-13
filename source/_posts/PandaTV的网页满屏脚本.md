---
title: PandaTV的网页满屏脚本
date: 2017-07-30 19:01:15
categories: [技术向]
tags: [Tampermonkey,JavaScript]
---
# [熊猫直播](https://www.panda.tv/all)最近无法实现网页全屏

如图
![pdd][1]

## 右侧无法隐藏，看着相当不舒服

### 而且这东西占了这么一大块，巨难受。
------

所以在**[Tampermonkey](http://tampermonkey.net)**里写了一个脚本来实现网页全屏

> 在此之前我们得先有一个Chrome浏览器且装有Tampermonkey插件：)



### 很简单的代码：
```
// ==UserScript==
// @name        熊猫直播网页全屏
// @namespace   vvzt.github.io
// @version     1.0.0
// @date        2017-07-30
// @author      voz7
// @description To hide the right column of the PandaTV's direct seeding room
// @include     http://*
// @include     https://*
// @match       https://www.panda.tv/*
// ==/UserScript==

window.onload=function() {
    if(document.getElementsByClassName('room-chat-box').length>=1){
        var parentsNode = document.getElementById('main-container');
        parentsNode.removeChild(document.getElementsByClassName('room-chat-box')[0]);
        document.getElementsByClassName('room-player-swf-container')[0].style.cssText='width:100%!important';
        console.log('满屏设置成功！');
    }
};
```

### 启用脚本
![启用脚本][2]

### 最后看到的就是这样的效果了

![最终效果][3]


 

-------


## **太懒了，不想每次打开手动调满屏，哈.哈.哈.（逃**


  [1]: http://otwin1ura.bkt.clouddn.com/img_20170730_191637.png
  [2]: http://otwin1ura.bkt.clouddn.com/img_20170730_193824.png
  [3]: http://otwin1ura.bkt.clouddn.com/img_20170730_194236.png