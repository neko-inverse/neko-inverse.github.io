---
title: "CSS实现霓虹闪烁呼吸灯可修改文本样式"
date: 2024-04-18T17:45:12+08:00
lastmod: 2024-04-18T18:07:14+08:00
summary: "先看效果，如下所示 话不多说，代码展示 老规矩，部分解释在注释里，直接上代码 <!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"> <meta name=\"viewport\" content=\"width=device-width, initial…"
url: /posts/129/
categories: ["前端"]
tags: ["CSS"]
ShowToc: false
---
<h3>先看效果，如下所示</h3>
<p><img src="/images/external/ad8dc7018e4bfe58e62b.gif" alt="" /></p>
<h3>话不多说，代码展示</h3>
<p><strong>老规矩，部分解释在注释里，直接上代码</strong></p>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;Document&lt;/title&gt;
  &lt;style&gt;
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: arial;
    }
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background-color: #07252d;
    }
    h1 {
      font-size: 110px;
      position: relative;
      letter-spacing: 15px;
      /* 文本转成大写 */
      text-transform: uppercase;
      text-align: center;
      line-height: 0.7em;
      color: #0e3742;
      /* 去掉编辑框外框 */
      outline: none;
      /* 设置倒影：在下方 1像素 渐变颜色*/
      -webkit-box-reflect: below 1px linear-gradient(transparent, #0008);
      animation: neon 5s linear infinite;
    }
    @keyframes neon {
      /* 来回变化设置闪烁频率，可以根据自己喜好随意设置 */
      0%, 21%, 31%, 51%, 60%, 80%, 90%, 92% {
        color: #0e3742;
      }
      20%, 30%, 50%, 60%, 80%, 90%, 100% {
        color: #fff;
        /* 设置文字阴影使其有一种发散的感觉 */
        text-shadow: 0 0 10px #03bcf4,
                      0 0 20px #03bcf4,
                      0 0 40px #03bcf4,
                      0 0 80px #03bcf4;
      }
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;!-- contenteditable 属性：可以设置元素是否可编辑修改 --&gt;
  &lt;h1 contenteditable=&quot;true&quot;&gt;hello world&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
