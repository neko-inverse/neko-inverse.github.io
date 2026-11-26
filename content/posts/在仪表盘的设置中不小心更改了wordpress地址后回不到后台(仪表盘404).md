---
title: "在仪表盘的设置中不小心更改了wordpress地址后回不到后台(仪表盘404)"
date: 2024-04-17T15:15:54+08:00
lastmod: 2024-04-17T15:15:54+08:00
summary: "现有资料 网上只有一篇CSDN和一篇知乎文章，通过数据库命令修改值，我这里以我自己建站的服务器为例，提供一种更简单直观的方法 操作方法 先进入服务器的控制台，进入数据库管理工具，如图： 登录进来后选择 wp_options 这个表，如图： 进入表后，在最上面两行就可以看见在设置里面的URL和home，把值修改回去就可以…"
url: /posts/127/
categories: ["建站"]
tags: ["建站"]
ShowToc: false
---
<h3>现有资料</h3>
<p>网上只有一篇CSDN和一篇知乎文章，通过数据库命令修改值，我这里以我自己建站的服务器为例，提供一种更简单直观的方法</p>
<h3>操作方法</h3>
<ol>
<li>先进入服务器的控制台，进入数据库管理工具，如图：
<img src="/images/external/8df3b4907563d4eb3ea6.png" alt="" /></li>
<li>登录进来后选择<code>wp_options</code>这个表，如图：
<img src="/images/external/a2700d4faea11a38ebd6.png" alt="" /></li>
<li>进入表后，在最上面两行就可以看见在设置里面的URL和home，把值修改回去就可以了
<img src="/images/external/2d486b635e148dc5cbb9.png" alt="" />
<ul>
<li>操作完成后就可以正常进入仪表盘控制台了，下次操作可要小心了</li>
</ul></li>
</ol>
