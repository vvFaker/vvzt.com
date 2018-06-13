---
title: 理解macrotask与microtask
date: 2018-04-04 16:58:24
categories: [技术向]
tags: [JavaScript,笔记]
---


# 什么是 Macrotask & Microtask

- 说什么都比不过一个例子，如下：

```
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');
```

- 所以，输出是什么呢？

执行一遍可以得到
```
script start
script end
promise1
promise2
setTimeout
```


- 那么问题来了，这是为什么呢

首先，在 Node.js 中，有两个任务队列，即 Macrotask、Microtask 队列。

在一个 Event Loop 里面，这两个队列会分两步执行


1. 执行一个 Macrotask 中的事件
2. 执行所有 Microtask 中的事件


> Macrotasks一般包括: ```setTimeout```, ```setInterval```, ```setImmediate```, I/O, UI rendering；
> Microtasks一般包括: ```process.nextTick```, ```Promises```, ```Object.observe```, ```MutationObserver```。
> （引自 [uglybachelor -Segmentfault](https://segmentfault.com/a/1190000007710772)）

如此复往，直至终结



# Demo

下面是引自 [macrotask and microtask -Dong Shelton Fiddle](https://jsfiddle.net/DongShelton/8Lausmo9/) 的 jsfiddler

这个 demo 演示了 Event Loop 的运作方式

{% jsfiddle 8Lausmo9 result,js,html,css dark 100% 570 %}


这样就很好理解了~


> 参考站点：[[译] 深入理解 JavaScript 事件循环（二）— task and microtask -Shelton_Dong](https://www.cnblogs.com/dong-xu/p/7000139.html)