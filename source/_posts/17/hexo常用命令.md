---
title: hexo常用命令
date: 2017-09-04 19:46:40
categories: [技术向]
tags: [Hexo,Blog]
---
# hexo常用命令

---

<h2>HEXO</h2>

<pre><code>bash</code><code>npm install hexo -g #安装  
npm update hexo -g #升级  
hexo init #初始化
</code></pre>

<h2>简写</h2>

<p><code>hexo n "我的博客"</code> == <code>hexo new "我的博客"</code> #新建文章<br><code>hexo p</code> == <code>hexo publish</code><br><code>hexo g</code> == <code>hexo generate</code>#生成<br><code>hexo s</code> == <code>hexo server</code> #启动服务预览<br><code>hexo d</code> == <code>hexo deploy</code>#部署</p>

<h2>服务器</h2>

<p><code>hexo server</code> #Hexo 会监视文件变动并自动更新，您无须重启服务器。<br><code>hexo server -s</code> #静态模式<br><code>hexo server -p 5000</code> #更改端口<br><code>hexo server -i 192.168.1.1</code> #自定义 IP</p>

<p><code>hexo clean</code> #清除缓存 网页正常情况下可以忽略此条命令<br><code>hexo g</code> #生成静态网页<br><code>hexo d</code> #开始部署</p>

<h3>监视文件变动</h3>

<p><code>hexo generate</code> #使用 Hexo 生成静态文件快速而且简单<br><code>hexo generate --watch</code> #监视文件变动</p>

<h3>完成后部署</h3>

<blockquote>
  <p>两个命令的作用是相同的<br><code>hexo generate --deploy</code><br><code>hexo deploy --generate</code></p>
</blockquote>

<p><code>hexo deploy -g</code><br><code>hexo server -g</code></p>

<h2>草稿</h2>

<p><code>hexo publish [layout] &lt;title&gt;</code></p>

<h2>模版</h2>

<p><code>hexo new "postName"</code> #新建文章<br><code>hexo new page "pageName"</code> #新建页面<br><code>hexo generate</code> #生成静态页面至public目录<br><code>hexo server</code> #开启预览访问端口（默认端口4000，'ctrl + c'关闭server）<br><code>hexo deploy</code> #将.deploy目录部署到GitHub</p>

<p><code>hexo new [layout] &lt;title&gt;</code><br><code>hexo new photo "My Gallery"</code><br><code>hexo new "Hello World" --lang tw</code></p>


| 变量| 描述|
| ------------- |:-------------:|
|layout|布局|
|title |标题|
|date |文件建立日期|

<pre><code>title: 使用Hexo搭建个人博客
layout: post
date: 2014-03-03 19:07:43
comments: true
categories: Blog
tags: [Hexo]
keywords: Hexo, Blog
description: 生命在于折腾，又把博客折腾到Hexo了。给Hexo点赞。
</code></pre>

<h2>模版（Scaffold）</h2>

<p><code>hexo new photo "My Gallery"</code></p>

| 变量| 描述|
| ------------- |:-------------:|
|layout|布局|
|title |标题|
|date |文件建立日期|

<h2>设置文章摘要</h2>

<pre><code>以上是文章摘要 &lt;!--more--&gt; 以下是余下全文 
</code></pre>

<h2>写作</h2>

<p><code>hexo new page &lt;title&gt;</code><br><code>hexo new post &lt;title&gt;</code></p>

| 变量| 描述|
| ------------- |:-------------:|
|:title|标题|
|:year|建立的年份（4 位数）|
|:month|建立的月份（2 位数）|
|:i_month|建立的月份（去掉开头的零）|
|:day|建立的日期（2 位数）|
|:i_day|建立的日期（去掉开头的零）|

<h3>推送到服务器上</h3>

<p><code>hexo n</code> #写文章<br><code>hexo g</code> #生成<br><code>hexo d</code> #部署 #可与<code>hexo g</code>合并为 <code>hexo d -g</code></p>

<h2>报错</h2>

<h3>1.找不到git部署</h3>

<pre><code>ERROR Deployer not found: git
</code></pre>

<p><strong>解决方法</strong></p>

<p><code>npm install hexo-deployer-git --save</code></p>

<h3>3.部署类型设置git</h3>

<p>hexo 3.0 部署类型不再是<code>github</code>，<code>_config.yml</code> 中修改</p>

<pre><code>bash</code><code># Deployment
## Docs: http://hexo.io/docs/deployment.html
deploy:
  type: git
  repository: git@***.github.com:***/***.github.io.git
  branch: master
</code></pre>

<h3>4. xcodebuild</h3>

<p>xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance</p>

<p><code>npm install bcrypt</code></p>

<h3>5. RSS不显示</h3>

<h4>安装RSS插件</h4>

<p><code>npm install hexo-generator-feed --save</code></p>

<h4>开启RSS功能</h4>

<p>编辑hexo/_config.yml，添加如下代码：</p>

<pre><code>rss: /atom.xml #rss地址  默认即可
</code></pre>

<h4>开启评论</h4>

<p>1.我使用多说代替自带的评论，在<a rel="nofollow" href="http://duoshuo.com">多说</a> 网站注册 &gt; 后台管理 &gt; 添加新站点 &gt; 工具 === 复制通用代码  里面有 short_name</p>

<ol>
<li><p>在根目录 <code>_config.yml</code> 添加一行  <code>disqus_shortname: jslite</code> 是在多说注册时产生的</p></li>
<li><p>复制到 <code>themes\landscape\layout\_partial\article.ejs</code><br>
把</p></li>
</ol>
<pre><code>&lt;% if (!index &amp;&amp; post.comments &amp;&amp; config.disqus_shortname){ %&gt;
&lt;section id="comments"&gt;
&lt;div id="disqus_thread"&gt;
  &lt;noscript&gt;Please enable JavaScript to view the &lt;a href="//disqus.com/?ref_noscript"&gt;comments powered by Disqus.&lt;/a&gt;&lt;/noscript&gt;
&lt;/div&gt;
&lt;/section&gt;
&lt;% } %&gt;
</code></pre>

<p>改为</p>

<pre><code>html</code><code>&lt;% if (!index &amp;&amp; post.comments &amp;&amp; config.disqus_shortname){ %&gt;
  &lt;section id="comments"&gt;
    &lt;!-- 多说评论框 start --&gt;
    &lt;div class="ds-thread" data-thread-key="&lt;%= post.layout %&gt;-&lt;%= post.slug %&gt;" data-title="&lt;%= post.title %&gt;" data-url="&lt;%= page.permalink %&gt;"&gt;&lt;/div&gt;
    &lt;!-- 多说评论框 end --&gt;
    &lt;!-- 多说公共JS代码 start (一个网页只需插入一次) --&gt;
    &lt;script type="text/javascript"&gt;
    var duoshuoQuery = {short_name:'&lt;%= config.disqus_shortname %&gt;'};
      (function() {
        var ds = document.createElement('script');
        ds.type = 'text/javascript';ds.async = true;
        ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
        ds.charset = 'UTF-8';
        (document.getElementsByTagName('head')[0] 
         || document.getElementsByTagName('body')[0]).appendChild(ds);
      })();
      &lt;/script&gt;
    &lt;!-- 多说公共JS代码 end --&gt;
  &lt;/section&gt;
&lt;% } %&gt;
</code></pre>


> 以上出自 [segmentfault][1]


  [1]: https://segmentfault.com/a/1190000002632530