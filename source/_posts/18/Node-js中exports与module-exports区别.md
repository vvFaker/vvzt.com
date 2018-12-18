---
title: Node.js中exports与module.exports区别
date: 2018-05-01 16:36:28
categories: [技术向]
tags: [Node.js]
---


# exports 与 module.exports


1. **module.exports** 初始值为一个空对象 {}
2. **exports** 是指向的 **module.exports** 的引用
3. require() 返回的是 **module.exports** 而不是 **exports**

-------------

每个 nodejs 文件都会自动创建一个 **module** 对象，并且存在 **module.exports** 属性，初始值为 {}

而 **exports** 初始状态下的引用指向 **module.exports** 所指向的内存

所以有
```
exports.test = 123;

console.log(exports); // { test: 123 }
console.log(module.exports); // { test: 123 }
```

这时 **exports** 和 **module.exports** 相同


-------------

但是当 **exports** 被指向新的对象时

```
exports.test = 123; // 等同于 module.exports.test = 123;
exports = { test: 666 };

console.log(exports); // { name: 666 }
console.log(module.exports); // { name: 123 }
```

因为 **exports** 的指向改变，所以 **module.exports** 未改变， **module.exports** 的值仍然是 **123**

此时其它 js 文件 require 到的值为 **{ name: 123 }**

> 这就是 **exports** 与 **module.exports** 的区别~

-------------

而我们经常看到的
```
exports = module.exports = { xxx }
```
就相当于
```
module.exports = { xxx }
exports = module.exports;
```

也就是说 **module.exports** 指向新的对象时，**exports** 断开了与 **module.exports** 的引用，通过 **exports** = **module.exports** 让 **exports** 重新指向 **module.exports**。



> 这就是我们经常看到 ```exports = module.exports = { xxx }``` 的原因~