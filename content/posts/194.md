---
title: "简单手撕实现vue的响应式"
date: 2024-05-04T15:14:19+08:00
lastmod: 2024-05-04T15:14:19+08:00
summary: "使用过 vue 朋友都知道 vue 是数据驱动视图，实现双向数据绑定，数据变化界面也跟着变化，今天我们来浅浅地当一下小小的尤雨溪，回到那个没有 vue 的时候，用原生 js 实现一下 vue 响应式 材料准备 先简单写个页面和样式 // index.html <!DOCTYPE html> <html lang=\"en…"
url: /posts/194/
categories: ["前端"]
tags: ["Vue"]
ShowToc: false
---
<p>使用过 vue 朋友都知道 vue 是数据驱动视图，实现双向数据绑定，数据变化界面也跟着变化，今天我们来浅浅地当一下小小的尤雨溪，回到那个没有 vue 的时候，用原生 js 实现一下 vue 响应式</p>
<h3>材料准备</h3>
<p>先简单写个页面和样式</p>
<pre><code>// index.html
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
    &lt;title&gt;Vue响应式&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;./index.css&quot; /&gt;
    &lt;script src=&quot;./yyx.js&quot;&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div class=&quot;card&quot;&gt;
      &lt;p id=&quot;lastName&quot;&gt;&lt;/p&gt;
      &lt;p id=&quot;firstName&quot;&gt;&lt;/p&gt;
      &lt;p id=&quot;age&quot;&gt;&lt;/p&gt;
    &lt;/div&gt;
    &lt;input type=&quot;text&quot; oninput=&quot;user.name = this.value&quot; /&gt;
    &lt;input type=&quot;date&quot; onchange=&quot;user.birth = this.value&quot; /&gt;
    &lt;script src=&quot;./index.js&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
<pre><code>// index.css
.card {
  width: 300px;
  border: 2px solid rgb(74, 125, 142);
  border-radius: 10px;
  font-size: 2em;
  padding: 0 20px;
  margin: 0 auto;
  background: lightblue;
  color: #333;
}
input[type=&quot;text&quot;] {
  margin-left: 600px;
}</code></pre>
<h3>实现响应式</h3>
<p>我们创建一个 js 文件，模拟 vue 的 js 源代码文件，就起名叫 <code>yyx.js</code></p>
<p>详细代码如下，详细了解过 vue 的朋友肯定听过<strong>依赖收集</strong>和<strong>派发更新</strong></p>
<pre><code>// yyx.js
/**
 * 实现响应式的函数，在对应的值的 get 和 set 中拿到依赖属性的函数并执行
 * @param {Object} obj 
 */
function respond(obj) {
  for (const key in obj) {
    let internalValue = obj[key]
    let funcs = new Set()
    Object.defineProperty(obj, key, {
      get: function () {
        //  依赖收集：收集该属性被哪些函数依赖
        if (window.__func) {
          funcs.add(window.__func)
        }
        return internalValue
      },
      set: function (value) {
        // 派发更新：当属性值发生变化时，通知所有依赖该属性的函数执行
        internalValue = value
        funcs.forEach(func =&gt; func())
      }
    })
  }
}
/**
 * 使用一个大全局变量接收调用的函数，以便在 get 中知道是哪个函数依赖对应属性调用，并在 set 中执行该函数
 * @param {function} fn 
 */
function autoRunFunc(fn) {
  window.__func = fn
  fn()
  window.__func = null
}</code></pre>
<p>题外话：这里的 window.__func 有点 PHP 的超全局变量的意味，难怪都说“PHP是世界上最好的语言”（笑）</p>
<p>有了我们手写的框架文件，我们就可以在自己要写的 js 里使用了，最后看一下效果</p>
<pre><code>// index.js
let user = {
  name: &#039;世风至&#039;,
  birth: &#039;2000-01-01&#039;,
}
/* 传入对象，使其变为响应式 */
respond(user)
// 显示姓氏
function showLastName() {
  document.querySelector(&#039;#lastName&#039;).textContent = &#039;姓：&#039; + user.name[0]
}
// 显示名字
function showFirstName() {
  document.querySelector(&#039;#firstName&#039;).textContent = &#039;名：&#039; + user.name.slice(1)
}
// 显示年龄
function showAge() {
  let birthday = new Date(user.birth)
  let today = new Date()
  today.setHours(0), today.setMinutes(0), today.setMilliseconds(0)
  let thisYearBirthday = new Date(
    today.getFullYear(),
    birthday.getMonth(),
    birthday.getDate()
  )
  let age = today.getFullYear() - birthday.getFullYear()
  if (today.getTime() &lt; thisYearBirthday.getTime()) {
    age--
  }
  document.querySelector(&#039;#age&#039;).textContent = &#039;年龄：&#039; + age
}

// showLastName()
// showFirstName()
// showAge()

/* 调用autoRunFunc函数，以便获得要执行的函数 */
autoRunFunc(showFirstName)
autoRunFunc(showLastName)
autoRunFunc(showAge)</code></pre>
<p>这里年龄函数是用日期算出来的，不用在意，你也可以直接用输入框输入年龄，看懂了也去动手实现一下吧</p>
