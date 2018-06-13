---
title: Nginx打开gzip和缓存配置
date: 2018-03-29 11:26:57
categories: [技术向]
tags: [Nginx,Server]
---



# 在Nginx中打开gzip

在 nginx.conf 中：

```
...
http{
    ...
    gzip on;
    ...
}
...
```

就打开了 gzip，简单得一匹，溜了溜...咳咳  还没完..


## 一些配置

```
gzip on;
# 开启gzip

gzip_comp_level 5
# Sets a gzip compression level of a response. Acceptable values are in the range from 1 to 9.
# 需要压缩的等级，等级分为1-9

gzip_disable "MSIE [1-6]\."
# Disables gzipping of responses for requests with “User-Agent” header fields matching any of the specified regular expressions.
# gzip_disable "MSIE [1-6]\." 即相当于对IE6不使用gzip

gzip_min_length 1k
# Sets the minimum length of a response that will be gzipped. The length is determined only from the “Content-Length” response header field.
# 启用压缩的最小长度，如大于1k开启

gzip_buffer 32 4k | 16 8k; 
# Sets the number and size of buffers used to compress a response. By default, the buffer size is equal to one memory page. This is either 4K or 8K, depending on a platform.
# > Until version 0.7.28, four 4K or 8K buffers were used by default.

gzip_http_version 1.0 | 1.1
# Sets the minimum HTTP version of a request required to compress a response.

gzip_proxied  off | expired | no-cache | no-store | private | no_last_modified | no_etag | auth | any ...
# Enables or disables gzipping of responses for proxied requests depending on the request and response. The fact that the request is proxied is determined by the presence of the “Via” request header field. The directive accepts multiple parameters:
# off
# disables compression for all proxied requests, ignoring other parameters;
# expired
# enables compression if a response header includes the “Expires” field with a value that # disables caching;
# no-cache
# enables compression if a response header includes the “Cache-Control” field with the “no-cache” parameter;
# no-store
# enables compression if a response header includes the “Cache-Control” field with the “no-store” parameter;
# private
# enables compression if a response header includes the “Cache-Control” field with the “private” parameter;
# no_last_modified
# enables compression if a response header does not include the “Last-Modified” field;
# no_etag
# enables compression if a response header does not include the “ETag” field;
# auth
# enables compression if a request header includes the “Authorization” field;
# any
# enables compression for all proxied requests.

gzip_types mime-type ...;
# Enables gzipping of responses for the specified MIME types in addition to “text/html”. The special value “*” matches any MIME type (0.8.29). Responses with the “text/html” type are always compressed.

gzip_vary on | off;
# Enables or disables inserting the “Vary: Accept-Encoding” response header field if the directives gzip, gzip_static, or gunzip are active.
```


关于 gzip 的 level ，下图可以参考一下（来自 [serverfault](https://serverfault.com/questions/253074/what-is-the-best-nginx-compression-gzip-level) ）：

![gzip_level](http://otwin1ura.bkt.clouddn.com/blog/329/gzip_comp_level.png)


由图可知，从 level 1 之后提升不是很多

所以对于 CPU 性能较低的服务器来说，level 开低一些也是极好的。



## 开启缓存


```
location ~* ^.+\.(ico|gif|jpg|jpeg|png)$ { 
    access_log   off; 
    expires      30d;
}

location ~* ^.+\.(css|js|txt|xml|swf|wav)$ {
    access_log   off;
    expires      24h;
}

location ~* ^.+\.(html|htm)$ {
    expires      1h;
}

location ~* ^.+\.(eot|ttf|otf|woff|svg)$ {
        access_log   off;
        expires max;
}
```

可以给静态资源打开缓存以减少服务器带宽消耗


-------

emm

感觉 Nginx 搞配置比 Apache 简单一点 - -

溜了溜了

