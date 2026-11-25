---
title: "爬取Tiobe编程语言排行榜并生成动态图"
date: 2024-05-09T16:21:30+08:00
lastmod: 2024-05-09T16:21:30+08:00
summary: "先看最终效果 爬取数据并存入CSV 不同功能分成两个文件看的清楚点，调试也方便，代码如下： // Tiobe.py import csv import re import requests url = 'https://www.tiobe.com/tiobe-index/' headers = { 'User-Agen…"
url: /posts/200/
categories: ["后端"]
tags: ["爬虫"]
ShowToc: false
---
<h3>先看最终效果</h3>
<p><img src="/images/external/ad3a409425453ae3d8e3.gif" alt="" /></p>
<h3>爬取数据并存入CSV</h3>
<p>不同功能分成两个文件看的清楚点，调试也方便，代码如下：</p>
<pre><code>// Tiobe.py

import csv
import re
import requests

url = &#039;https://www.tiobe.com/tiobe-index/&#039;
headers = {
    &#039;User-Agent&#039;: &#039;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36&#039;
}
# 创建本地文件
f = open(&#039;Tiobe.csv&#039;, &#039;w&#039;, newline=&#039;&#039;)
# 分类
writer = csv.DictWriter(f, [&#039;Programming&#039;, &#039;DataPer&#039;, &#039;Data&#039;])
writer.writeheader()
response = requests.get(url, headers=headers)
html = response.text
# 正则清洗数据
result = &#039;&#039;.join(re.findall(r&#039;series: (.*?)}\);&#039;, html, re.DOTALL))
result = re.findall(r&#039;({.*?})&#039;, result, re.DOTALL)
for item in result:
    name = &#039;&#039;.join(re.findall(r&quot;{name : &#039;(.*?)&#039;&quot;, item, re.DOTALL))
    data = re.findall(r&quot;\[Date.UTC(.*?)]&quot;, item, re.DOTALL)
    for i in data:
        i = i.replace(&#039; &#039;, &#039;&#039;)
        i = re.sub(r&#039;[()]&#039;, &#039;&#039;, i)
        value = i.split(&#039;,&#039;)[-1]
        time_list = i.split(&#039;,&#039;)[:3]
        time = &quot;&quot;
        for index, j in enumerate(time_list):
            if index != 0:
                if len(j) == 1:
                    j = &#039;0&#039; + j
            if index == 0:
                time += j
            else:
                time += &#039;-&#039; + j
        temp = {
            &#039;Programming&#039;: name,
            &#039;DataPer&#039;: value,
            &#039;Data&#039;: time
        }
        writer.writerow(temp)
# 写入本地文件
f.close()</code></pre>
<h3>读取CSV文件并生成动态图</h3>
<pre><code>// showTiobe.py

import plotly.express as px
import pandas as pd

df = pd.read_csv(&#039;Tiobe.csv&#039;)
fig = px.bar(df,
             y=&quot;Programming&quot;,
             x=&quot;DataPer&quot;,
             animation_frame=&quot;Data&quot;,
             range_x=[0, df.DataPer.max()],
             orientation=&#039;h&#039;,
             text=&#039;DataPer&#039;,
             color=&quot;Programming&quot;)
# 设置动画排序规则为 DataPer 升序
fig.update_layout(barmode=&#039;stack&#039;, yaxis={&#039;categoryorder&#039;: &#039;total ascending&#039;})
# 绘制
fig.update_layout(width=700, height=700,
                  xaxis_showgrid=False,
                  yaxis_showgrid=False,  # x y 向线
                  showlegend=True)  # 图例
fig.update_xaxes(title_text=&quot;TIOBE趋势图&quot;)
fig.show()</code></pre>
<p>这样就完成了，运行后会自动在浏览器打开生成好的动态图
每次都直接给完整代码方便你们CV，上哪找我这么好的人 q(≧▽≦q)</p>
