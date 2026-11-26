---
title: "ALL命令集合"
date: 2024-03-29T13:43:43+08:00
lastmod: 2024-04-01T21:24:05+08:00
summary: "Linux asciiquarium 在线养鱼 cmatrix 黑客帝国 (-C 更改颜色) cowsay 会说话的牛 (-f 指定动物 \"要说的话\" |lolcat (变成彩色的)) sl 动力火车 hllowood 假装在忙 bastet 俄罗斯方块 切换到 root 用户 su - root Docker 从镜像…"
url: /posts/29/
categories: ["运维"]
tags: []
ShowToc: false
---
<h2>Linux</h2>
<ul>
<li>
<p>asciiquarium  在线养鱼</p>
</li>
<li>
<p>cmatrix  黑客帝国  (-C 更改颜色)</p>
</li>
<li>
<p>cowsay  会说话的牛  (-f 指定动物 &quot;要说的话&quot; |lolcat (变成彩色的))</p>
</li>
<li>
<p>sl  动力火车</p>
</li>
<li>
<p>hllowood  假装在忙</p>
</li>
<li>
<p>bastet  俄罗斯方块</p>
</li>
<li>
<p>切换到 root 用户</p>
<pre><code class="language-linux">su - root</code></pre>
</li>
</ul>
<hr />
<h2>Docker</h2>
<ul>
<li>
<p>从镜像仓库拉取镜像到本地</p>
<pre><code class="language-docker">docker pull 镜像名</code></pre>
</li>
<li>
<p>本地上传镜像到镜像仓库</p>
<pre><code class="language-docker">docker push</code></pre>
</li>
<li>
<p>查看所有本地镜像</p>
<pre><code class="language-docker">docker images</code></pre>
</li>
<li>
<p>删除镜像</p>
<pre><code class="language-docker">docker rmi 镜像名:版本号</code></pre>
</li>
<li>
<p>自定义镜像：dockerfile文件使用如下命令构建</p>
<pre><code class="language-docker">docker build</code></pre>
</li>
<li>
<p>将镜像保存到本地变成压缩文件</p>
<pre><code class="language-docker">docker save -o 文件名.后缀 镜像名:版本号</code></pre>
</li>
<li>
<p>将压缩文件加载成镜像</p>
<pre><code class="language-docker">docker load</code></pre>
</li>
<li>
<p>创建并运行容器(运行后显示容器ID)</p>
<pre><code class="language-docker">docker run -d(后台运行) --name(容器名) -p(端口映射) 80:80(宿主机:容器内) -e(环境变量) 镜像名(不加版本默认最新)</code></pre>
</li>
<li>
<p>停止容器内的进程</p>
<pre><code class="language-docker">docker stop 容器名</code></pre>
</li>
<li>
<p>启动容器内停止的进程</p>
<pre><code class="language-docker">docker start</code></pre>
</li>
<li>
<p>查看当前容器的运行状态</p>
<pre><code class="language-docker">docker ps</code></pre>
</li>
<li>
<p>删除容器</p>
<pre><code class="language-docker">docker rm [-f(强制删除，运行中的也能删)]</code></pre>
</li>
<li>
<p>查看容器运行日志</p>
<pre><code class="language-docker">docker logs</code></pre>
</li>
<li>
<p>进入容器内部(进入后<code>exit</code>可以退出来)</p>
<pre><code class="language-docker">docker exec -it(添加一个可输入的终端) 容器名 bash(命令行)</code></pre>
</li>
<li>
<p>进入root目录下的.bashrc文件设置命令别名</p>
<pre><code class="language-docker">vi ~/.bashrc</code></pre>
<pre><code class="language-docker">source ~/.bashrc  (使更改后的生效)</code></pre>
</li>
</ul>
<p>不知道命令具体怎么写可以后面接上<code>--help</code>查看</p>
<h2>Git</h2>
<ul>
<li>
<p>远程仓库拉代码到本地</p>
<pre><code class="language-git">git clone ssh仓库地址</code></pre>
</li>
</ul>
<hr />
<h2>npm</h2>
<ul>
<li>查看当前的下包源</li>
</ul>
<pre><code class="language-npm">npm config get registry</code></pre>
<ul>
<li>将下包的镜像源切换为淘宝的镜像源</li>
</ul>
<pre><code class="language-npm">npm config set registry=https://registry.npm.taobao.org/</code></pre>
<hr />
<h2>MySQL</h2>
<ul>
<li>
<p>修改密码</p>
<pre><code class="language-mysql">ALTER USER 'root'@'localhost' IDENTIFIED BY '新密码';</code></pre>
</li>
</ul>
<h2>杂</h2>
<ul>
<li>
<p>Windows11 恢复完整右键经典菜单(回到win10的右键输入)</p>
<pre><code>reg add HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32 /f /ve</code></pre>
</li>
<li>
<p>恢复win11的右键输入</p>
<pre><code>reg delete "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}" /f</code></pre>
</li>
</ul>
<hr />
