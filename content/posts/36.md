---
title: "PHP编写万年历"
date: 2024-03-30T15:02:45+08:00
lastmod: 2024-03-30T15:07:44+08:00
summary: "我将万年历生成封装一个函数，以便你可以在你想要用到的地方调用这个函数生成万年历 <!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"> <title>万年历</title> <style> .box { margin: 10px; display:…"
url: /posts/36/
categories: ["前端"]
tags: ["前端", "PHP"]
ShowToc: false
---
<p><strong>我将万年历生成封装一个函数，以便你可以在你想要用到的地方调用这个函数生成万年历</strong></p>
<pre><code class="language-php">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;万年历&lt;/title&gt;
    &lt;style&gt;
        .box {
            margin: 10px;
            display: grid; /* 网格布局 */
            grid-template-rows: repeat(3, 1fr); /* 创建 3 行，每行的宽度都是容器宽度的 1/3 */
            grid-template-columns: repeat(4, 1fr); /* 创建 4 列，每列的宽度都是容器宽度的 1/4 */
            gap: 35px; /* 指定网格项之间的水平和垂直间距都为 10px */
        }
        table {
            border-spacing: 0 8px; /* 设置列(水平)间距为 0，行(竖直)间距为 8px */
        }
        th {
            background: #999;
            height: 30px; /* 不知道为什么有个别 th 上下高度比其他的窄，就设置了 height 统一高度，如果知道原因恳请留言告诉我 */
            font-size: 25px;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;?php
    function calendar($y)
    {
        $html = &#039;&lt;div class=&quot;box&quot;&gt;&#039;;
        $w = date(&#039;w&#039;,strtotime(&quot;$y-1-1&quot;)); # 获取指定年份的 1 月 1 日是星期几，0 表示星期日
        for ($m = 1;$m &lt;= 12;$m++){ # 输出 12 个月份的 12 个表格
            $html .= &quot;&lt;table&gt;&lt;tr&gt;&lt;th colspan=&#039;7&#039;&gt;{$y}年{$m}月&lt;/th&gt;&lt;/tr&gt;
                             &lt;tr&gt;&lt;td&gt;日&lt;/td&gt;&lt;td&gt;一&lt;/td&gt;&lt;td&gt;二&lt;/td&gt;&lt;td&gt;三&lt;/td&gt;&lt;td&gt;四&lt;/td&gt;&lt;td&gt;五&lt;/td&gt;&lt;td&gt;六&lt;/td&gt;&lt;/tr&gt;&quot;;
            $dOfM = date(&#039;t&#039;,strtotime(&quot;$y-$m&quot;)); # 获取当前月份 $m 最多是多少天
            $html .= &#039;&lt;tr&gt;&#039;;
            for($d = 1;$d &lt;= $dOfM;$d++){
                if($w &amp;&amp; $d == 1) $html .= &quot;&lt;td colspan=&#039;$w&#039;&gt;&lt;/td&gt;&quot;; # 如果该月的第一天不是星期天，则使用合并列的方式在前面填充空白
                $html .= &quot;&lt;td&gt;$d&lt;/td&gt;&quot;;
                if($w == 6 &amp;&amp; $d != $dOfM) $html .= &#039;&lt;/tr&gt;&lt;tr&gt;&#039;; # 如果星期六不是该月的最后一天，则表格此行结束并开始下一行
                elseif ($d == $dOfM) $html .= &#039;&lt;/tr&gt;&#039;; # 是该月最后一天，则闭合行 tr 标签
                $w = ($w + 1 &gt; 6) ? 0 : $w + 1;
            }
            $html .= &#039;&lt;/table&gt;&#039;;
        }
        $html .= &#039;&lt;/div&gt;&#039;;
        return $html;
    }

    echo calendar(&#039;2024&#039;);
?&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>效果如下：</p>
<img src="/images/external/5f053ed2eb0abade052b.png" />
<p><strong>这样，万年历就写好了，你可以传入年份看到那一年的各月日历，也可以按个人喜欢调整显示的样式，还可以增加新的功能或者与其他功能联动，快去试试吧！</strong></p>
