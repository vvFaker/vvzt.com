---
title: ElementUI + Vue2 + Koa2 实现图片上传
date: 2018-02-06 13:34:43
categories: [技术向]
tags: [Koa2,JavaScript,Vue.js]
---

# ElementUI + Vue2 + Koa2 实现图片上传

---



## 前端

```
<template>
    <el-upload
      class="upload"
      :headers=personal.headers
      :action=personal.uploadURL
      :on-success="handleSuccess"
      :on-error="handleError"
      :before-remove="beforeRemove"
      :before-upload="beforeUpload"
      :multiple=false
      :limit="1"
      :on-exceed="handleExceed"
      :file-list="personal_form.fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过512kb</div>
    </el-upload>
</tempalte>
```

## 后端

> 用到了 multer 作为中间件对图片进行处理
> 即下面的 upload.single('file') ，其中 file 为表单中对应的 name ，默认为 file

```
const router = require('koa-router')();
const userController = require('../controllers/user_controller');
const upload = require('../controllers/multer.js');

router.get('/upload', async (ctx, next) => { ctx.body = { status: 'error' } });
router.post('/upload', upload.single('file'), userController.upload);
```


## 需要注意的是

> 前端需要设置传输格式 enctype=multipart/form-data ， 在  ```<el-upload>``` 中 :header=personal.headers

```
personal: {
  headers: {
    enctype: "multipart/form-data"
  }
}
```

----

### multer 对上传文件的处理：
```
// multer.js

const multer = require('koa-multer');
let storage = multer.diskStorage({
  destination: function (req, file, cb) { // 设置上传后文件路径
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) { // 给上传文件重命名，获取添加后缀名
    let fileFormat = (file.originalname).split(".");
    cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
});

let upload = multer({ //添加配置文件到multer对象
  storage: storage,
  limits: {
    files: 1,
    fileSize: 1024*1024/2, // 限制512KB
    fields: 10,
    headerPairs: 10
  }
});
module.exports = upload;
```