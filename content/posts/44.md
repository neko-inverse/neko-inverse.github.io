---
title: "安装Docker"
date: 2024-03-30T22:23:09+08:00
lastmod: 2024-03-30T22:23:09+08:00
summary: "1.卸载旧版 首先如果系统中已经存在旧的Docker，则先卸载： yum remove docker \\ docker-client \\ docker-client-latest \\ docker-common \\ docker-latest \\ docker-latest-logrotate \\ docker-log…"
url: /posts/44/
categories: ["运维"]
tags: ["Docker"]
ShowToc: false
---
<h2>1.卸载旧版</h2>
<p>首先如果系统中已经存在旧的Docker，则先卸载：</p>
<pre><code class="language-Shell">yum remove docker \
    docker-client \
    docker-client-latest \
    docker-common \
    docker-latest \
    docker-latest-logrotate \
    docker-logrotate \
    docker-engine</code></pre>
<pre><code class="language-Bash"># 启动Docker
systemctl start docker

# 停止Docker
systemctl stop docker

# 重启
systemctl restart docker

# 设置开机自启
systemctl enable docker

# 执行docker ps命令，如果不报错，说明安装启动成功
docker ps</code></pre>
<h2>2.配置Docker的yum库</h2>
<p>首先要安装一个yum工具</p>
<pre><code class="language-Bash">yum install -y yum-utils</code></pre>
<p>安装成功后，执行命令，配置Docker的yum源：</p>
<pre><code class="language-Bash">yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo</code></pre>
<h2>3.安装Docker</h2>
<p>最后，执行命令，安装Docker</p>
<pre><code class="language-Bash">yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin</code></pre>
<h2>4.启动和校验</h2>
<pre><code class="language-Bash"># 启动Docker
systemctl start docker

# 停止Docker
systemctl stop docker

# 重启
systemctl restart docker

# 设置开机自启
systemctl enable docker

# 执行docker ps命令，如果不报错，说明安装启动成功
docker ps</code></pre>
<h2>5.配置镜像加速</h2>
<p>这里以阿里云镜像加速为例。</p>
<h3>5.1.注册阿里云账号</h3>
<p>首先访问阿里云网站:</p>
<p><a href="https://www.aliyun.com/">https://www.aliyun.com/</a></p>
<p>注册一个账号。</p>
<h3>5.2.开通镜像服务</h3>
<p>在首页的产品中，找到阿里云的<strong>容器镜像服务</strong>：</p>
<img src="/images/external/fd21937e0c3d784f2eeb.png" />
<p>点击后进入控制台：</p>
<p><img src="/images/external/45ae6d08b25fc73fd716.png" alt="" /></p>
<p>首次可能需要选择立刻开通，然后进入控制台。</p>
<h3>5.3.配置镜像加速</h3>
<p>找到<strong>镜像工具</strong>下的<strong>镜像加速器</strong>：</p>
<p><img src="/images/external/f4abe2c724168e970898.png" alt="" /></p>
<p>页面向下滚动，即可找到配置的文档说明：</p>
<p><img src="/images/external/fa5fb5872cb29aea6ca0.png" alt="" /></p>
<p>具体命令如下：</p>
<pre><code class="language-Bash"># 创建目录
mkdir -p /etc/docker

# 复制内容，注意把其中的镜像加速地址改成你自己的
tee /etc/docker/daemon.json &lt;&lt;-&#039;EOF&#039;
{
  &quot;registry-mirrors&quot;: [&quot;https://xxxx.mirror.aliyuncs.com&quot;]
}
EOF

# 重新加载配置
systemctl daemon-reload

# 重启Docker
systemctl restart docker</code></pre>
