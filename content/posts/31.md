---
title: "ALL报错解决汇总"
date: 2024-03-29T13:45:06+08:00
lastmod: 2024-03-29T13:45:25+08:00
summary: "远程连接MySQL报错 报错内容： Client does not support authentication protocol requested by server; consider upgrading MySQL client 报错原因：MySQL8.0以后的版本加密方式与之前不同，8.0.11换了新的身份验…"
url: /posts/31/
categories: ["未分类"]
tags: []
ShowToc: false
---
<h3>远程连接MySQL报错</h3>
<p>报错内容：<code>Client does not support authentication protocol requested by server; consider upgrading MySQL client</code></p>
<p>报错原因：MySQL8.0以后的版本加密方式与之前不同，8.0.11换了新的身份验证插件：<code>caching_sha2_password</code>，以前的为<code>mysql_native_password</code></p>
<p>解决方法：</p>
<pre><code>            1. 登录数据库后，查看'root'用户身份验证插件：
   * <code>use mysql;</code>
   * <code>select user,plugin,host from user where user=&#039;root&#039;;</code>
            2. 改变身份验证插件(加密方式)
   - <code>alter user &#039;root&#039;@&#039;localhost&#039; identified with mysql_native_password by &#039;277882&#039;;</code>
            3. 最后重新查看加密方式(身份验证插件)
   - <code>select user,plugin from user where user=&#039;root&#039;;</code></code></pre>
<hr />
<h2>node-express报错</h2>
<p>报错内容：<code>expressJWT is not a function</code></p>
<p>报错原因：express高版本代码书写与过去低版本不同，新版需要配置algorithms算法，一般默认值为HS256</p>
<p>解决方法：</p>
<ul>
<li>代码改成：</li>
</ul>
<pre><code class="language-javascript">app.use(expressJWT.expressjwt({ secret: secretKey, algorithms: [&quot;HS256&quot;] }).unless({ path: [/^\/api\//] }))</code></pre>
<hr />
