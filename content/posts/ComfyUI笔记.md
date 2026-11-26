---
title: "ComfyUI笔记"
date: 2025-12-24T11:23:48+08:00
lastmod: 2025-12-24T11:23:48+08:00
summary: "坑点随记 for循环的For Loop End的initial_value必须要接上节点进行强制消费，否则会被comfyui的智能剪枝机制优化掉，只跑一次看一下就可以了，接上输出才会跑完全部循环"
url: /posts/250/
categories: ["AI"]
tags: ["comfyui"]
ShowToc: false
---
<h3>坑点随记</h3>
<ol>
<li>for循环的For Loop End的initial_value必须要接上节点进行强制消费，否则会被comfyui的智能剪枝机制优化掉，只跑一次看一下就可以了，接上输出才会跑完全部循环</li>
</ol>
