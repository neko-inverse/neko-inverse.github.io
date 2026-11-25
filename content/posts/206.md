---
title: "Uniapp小程序"
date: 2024-05-26T14:17:49+08:00
lastmod: 2024-05-26T14:17:49+08:00
summary: "项目结构： 实现轮播图： <swiper> <swiper-item> <image src=\"\" ></image> </swiper-item> </swiper> 方形铺满，设置样式宽高都为750rpx uni.previewImage({}) 进行大图预览 vscode用 Ctrl+I 唤醒代码提示 设置允许j…"
url: /posts/206/
categories: ["前端"]
tags: ["uniapp"]
ShowToc: false
---
<h4>项目结构：</h4>
<p><img src="/images/external/8ddb88ea18274502bcc5.png" alt="image-20240406103508853" /></p>
<h4>实现轮播图：</h4>
<pre><code>&lt;swiper&gt;
    &lt;swiper-item&gt;
        &lt;image src=&quot;&quot; &gt;&lt;/image&gt;
    &lt;/swiper-item&gt;
&lt;/swiper&gt;</code></pre>
<p>方形铺满，设置样式宽高都为750rpx</p>
<p><code>uni.previewImage({})</code>进行大图预览</p>
<ul>
<li><strong>vscode用<code>Ctrl+I</code>唤醒代码提示</strong></li>
</ul>
<h4>设置允许json文件里写注释</h4>
<p>将文件设置为jsonc，如下图：</p>
<p><img src="/images/external/bbf8553d63727f163df3.png" alt="image-20240406114407600" /></p>
<h4>HbuilderX内置终端打不开的解决方法：</h4>
<p>找到HbuilderX的安装位置，进入HBuilderX\plugins\builtincef3terminal\script下main.js，将shell=&quot;powershell.exe&quot;改为shell = 'C:/Program Files/PowerShell/7/pwsh.exe' ，改成你自己终端的绝对路径，如下图：</p>
<p><img src="/images/external/98651983f9b4ccb64187.png" alt="image-20240406121322697" /></p>
<h4>修改tabBar页面样式：</h4>
<p>在<code>pages.json</code>里修改</p>
<h4>打包程序使其能导入微信开发者工具</h4>
<p>执行命令<code>pnpm dev:mp-weixin</code>，将生成的<code>dist</code>文件夹下的<code>dev</code>文件夹下的<code>mp-weixin</code>文件夹导入到微信开发者工具中</p>
<h4>sitemap.json文件找不到报错：</h4>
<p><strong>把<code>sitemap.json</code>删了再粘贴回来就解决了</strong></p>
<h4>使用uni-ui</h4>
<p><a href="https://uniapp.dcloud.net.cn/component/uniui/quickstart.html#npm安装">uni-app官网 (dcloud.net.cn)</a></p>
<p><strong>安装 uni-ui</strong>：<code>npm i @dcloudio/uni-ui</code>   或   <code>yarn add @dcloudio/uni-ui</code></p>
<p><strong>配置easycom</strong>：<code>pages.json</code>文件里添加如下内容</p>
<pre><code class="language-javascript">// pages.json
{
    // 组件自动引入规则
  &quot;easycom&quot;: {
    // 是否开启自动扫描
        &quot;autoscan&quot;: true,
      // 以正则方式自定义组件匹配规则
        &quot;custom&quot;: {
            // uni-ui 规则如下配置
            &quot;^uni-(.*)&quot;: &quot;@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue&quot;
        }
    },

    // 其他内容
    pages:[
        // ...
    ]
}</code></pre>
<p>ts项目使用uni-ui添加类型声明文件，安装：<code>npm i -D @uni-helper/uni-ui-types</code>，然后在<code>tsconfig.json</code>文件中的<code>&quot;types&quot;</code>项后面添加<code>&quot;@uni-helper/uni-ui-types&quot;</code></p>
<h4>Pinia持久化</h4>
<p><code>store</code>文件夹下的ts/js文件最后添加如下内容</p>
<pre><code>// TODO: 持久化
  {
    // 网页端
    // persist: true,
    // 小程序端
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        }
      },
    },
  },</code></pre>
<p>pinia解构注意事项：</p>
<pre><code class="language-awk">export default defineComponent({
  setup() {
    const store = useCounterStore()
    // ❌ 这将无法生效，因为它破坏了响应式
    // 这与从 `props` 中解构是一样的。
    const { name, doubleCount } = store

    name // &quot;eduardo&quot;
    doubleCount // 2

    return {
      // 始终是 &quot;eduardo&quot;
      name,
      // 始终是 2
      doubleCount,
      // 这个将是响应式的
      doubleValue: computed(() =&gt; store.doubleCount),
      }
  },
})</code></pre>
<p>为了从 store 中提取属性时保持其响应性，你需要使用 storeToRefs()。</p>
<pre><code class="language-javascript">import { storeToRefs } from &#039;pinia&#039;

export default defineComponent({
  setup() {
    const store = useCounterStore()
    // `name` and `doubleCount` 都是响应式 refs
    // 这也将为由插件添加的属性创建 refs
    // 同时会跳过任何 action 或非响应式（非 ref/响应式）属性
    const { name, doubleCount } = storeToRefs(store)
    // 名为 increment 的 action 可以直接提取
    const { increment } = store
    return {
      name,
      doubleCount,
      increment,
    }
  },
})</code></pre>
