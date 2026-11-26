---
title: "爬虫简单入门[python 带简单实战]"
date: 2024-04-29T15:51:14+08:00
lastmod: 2024-04-29T15:51:14+08:00
summary: "下面是爬取书的价格和书名的简单示例： import requests from bs4 import BeautifulSoup content = requests.get(\"http://books.toscrape.com/\").text # 拿到网页源码 soup = BeautifulSoup(content…"
url: /posts/177/
categories: ["后端"]
tags: ["爬虫"]
ShowToc: false
---
<p>下面是爬取书的价格和书名的简单示例：</p>
<pre><code class="language-python">import requests
from bs4 import BeautifulSoup
content = requests.get(&quot;http://books.toscrape.com/&quot;).text # 拿到网页源码
soup = BeautifulSoup(content, &quot;html.parser&quot;)
all_prices = soup.find_all(&quot;p&quot;, attrs={&quot;class&quot;: &quot;price_color&quot;}) # 获取所有类名为“price_color”的 p 标签
for price in all_prices:
    print(price.string) #拿到每个标签里的文字内容
all_titles = soup.find_all(&quot;h3&quot;)
for title in all_titles:
    all_links = title.find_all(&quot;a&quot;)
    for link in all_links:
        print(link.string)</code></pre>
<p>如果<code>h3</code>里只有一个<code>a</code>标签，可以用<code>find()</code>代替<code>find_all()</code>，里面也不需要循环了，如下：</p>
<pre><code class="language-python">for title in all_titles:
    link = title.find(&quot;a&quot;)
    print(link.string)</code></pre>
<p>再来一个爬虫经典案例，爬豆瓣电影TOP250的影片名，完整代码如下:</p>
<pre><code class="language-python">import requests
from bs4 import BeautifulSoup

headers = {
    &quot;User-Agent&quot;: &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36&quot;
}
for i in range(0, 250, 25):
    response = requests.get(f&#039;https://movie.douban.com/top250?start={i}&#039;, headers=headers)
    html = response.text
    soup = BeautifulSoup(html, &#039;html.parser&#039;)
    all_titles = soup.find_all(&#039;span&#039;, attrs={&#039;class&#039;: &#039;title&#039;})
    for title in all_titles:
        title_string = title.string
        if &#039;/&#039; not in title_string:
            print(title_string)</code></pre>
<hr />
<p>下面来进阶一点，我们来爬一下图片</p>
<p>为了安全就不做过多解释了</p>
<pre><code class="language-python">import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

headers = {
    &#039;Referer&#039;: &#039;https://www.pixiv.net/&#039;,
    &#039;User-Agent&#039;: &#039;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.0.0&#039;
}
url = &#039;https://www.toopic.cn/&#039;
path = &#039;F://spiderImages&#039;
response = requests.get(url, headers=headers)
html = response.text
soup = BeautifulSoup(html, &#039;html.parser&#039;)
image_links = []
for img in soup.find_all(&#039;img&#039;, attrs={&#039;class&#039;: &#039;lazy&#039;}):
    img_url = img[&#039;data-original&#039;]
    # 如果图片链接是相对路径，则将其转换为绝对路径
    if not img_url.startswith((&#039;http://&#039;, &#039;https://&#039;)):
        img_url = urljoin(url, img_url)
    image_links.append(img_url)
for i, image_link in enumerate(image_links):
    response = requests.get(image_link, headers=headers)
    with open(f&#039;{path}/img{i + 1}.jpg&#039;, &#039;wb&#039;) as file:
        file.write(response.content)</code></pre>
