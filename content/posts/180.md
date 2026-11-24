---
title: "使用BeautifulSoup提取本地HTML文件代码中的内容[Python]"
date: 2024-05-01T13:54:56+08:00
lastmod: 2024-05-01T14:08:52+08:00
summary: "使用BeautifulSoup提取本地HTML文件代码中的内容并按照指定格式输出 曾经很久以前的一个HTML文件，里面有非常多的a标签写的一个网站收录集合，那时候刚学，现在看来写的真的蠢，代码类似下面： <div id=\"ITtools\" class=\"\"> <h3>IT工具</h3> <a href=\"https:/…"
url: /posts/180/
categories: ["后端"]
tags: ["爬虫"]
ShowToc: false
---
<p>使用BeautifulSoup提取本地HTML文件代码中的内容并按照指定格式输出
曾经很久以前的一个HTML文件，里面有非常多的a标签写的一个网站收录集合，那时候刚学，现在看来写的真的蠢，代码类似下面：</p>
<pre><code>&lt;div id=&quot;ITtools&quot; class=&quot;&quot;&gt;
      &lt;h3&gt;IT工具&lt;/h3&gt;
      &lt;a href=&quot;https://www.zaiwen.top/&quot;&gt;chatgpt国内免费版&lt;/a&gt;
      &lt;a href=&quot;https://www.gaituya.com/&quot;&gt;在线 PS 网站&lt;/a&gt;
      &lt;a href=&quot;https://www.processon.com/&quot;&gt;流程思维导图&lt;/a&gt;
&lt;/div&gt;
&lt;div id=&quot;tools&quot; class=&quot;&quot;&gt;
      &lt;h3&gt;工具&lt;/h3&gt;
      &lt;a href=&quot;https://toolwa.com/record/&quot;&gt;在线录屏&lt;/a&gt;
      &lt;a href=&quot;https://translate.limit.dev/&quot;&gt;GPT翻译&lt;/a&gt;
      &lt;a href=&quot;https://www.deepl.com/translator&quot;&gt;deepl最准确翻译&lt;/a&gt;
      &lt;a href=&quot;https://toolwa.com/&quot;&gt;工具哇工具合集&lt;/a&gt;
&lt;/div&gt;</code></pre>
<p>不过其实有非常多，这只是一点，我想把h3和a标签的信息提取出来，就用python写了个程序，想输出的格式为下面这种：</p>
<pre><code>&#039;ACG&#039;: [
    { &#039;name&#039;: &#039;可可影视&#039;, &#039;url&#039;: &#039;https://wwnf.lanzouw.com/ikygI1grlryh&#039; },
    { &#039;name&#039;: &#039;二矿动漫&#039;, &#039;url&#039;: &#039;https://www.ntdm9.com/&#039; },
    { &#039;name&#039;: &#039;百万美金主(全是广告)&#039;, &#039;url&#039;: &#039;http://www.milliondollarhomepage.com/&#039; },
    { &#039;name&#039;: &#039;网址库Hanime&#039;, &#039;url&#039;: &#039;https://www.wangzhiku.com/w/5903/&#039; },
    { &#039;name&#039;: &#039;磁力天堂&#039;, &#039;url&#039;: &#039;https://cilitiantang.one/sitetag/skrbt&#039; },
  ],
  &#039;PPT图片设计等工具&#039;: [
    { &#039;name&#039;: &#039;哩布哩布生成图&#039;, &#039;url&#039;: &#039;https://www.liblib.ai/sd&#039; },
    { &#039;name&#039;: &#039;做包装设计&#039;, &#039;url&#039;: &#039;https://www.pacdora.cn/&#039; },
    { &#039;name&#039;: &#039;CS自学指南&#039;, &#039;url&#039;: &#039;https://csdiy.wiki/&#039; },
   ],</code></pre>
<p>将h3和a标签的信息替换进去
实际实现出来的python代码如下：</p>
<pre><code>from bs4 import BeautifulSoup

path = &quot;C:/Users/31615/Desktop/自用web/全网站收藏夹.html&quot;
# 读取本地HTML文件
with open(path, &quot;r&quot;, encoding=&quot;utf-8&quot;) as f:
    html_doc = f.read()
# 创建BeautifulSoup对象
soup = BeautifulSoup(html_doc, &quot;html.parser&quot;)

# 查找所有 h3 标题
h3_headers = soup.find_all(&quot;h3&quot;)

# 遍历每个 h3 标题，并提取其后的链接
results = {}
for h3 in h3_headers:
    category = h3.text.strip()  # 获取标题文本作为类别
    links = h3.find_next_siblings(&quot;a&quot;)  # 获取标题后的所有链接
    results[category] = [
        {&quot;name&quot;: link.text.strip(), &quot;url&quot;: link.get(&quot;href&quot;)} for link in links
    ]

# 按指定格式打印结果
for category, links in results.items():
    print(f&quot;&#039;{category}&#039;: [&quot;)
    for link in links:
        print(f&quot;    {link},&quot;)
    print(&quot;  ],&quot;)
</code></pre>
<p>时时勤记录，岁月不饶人。日拱一卒，拱多了累</p>
