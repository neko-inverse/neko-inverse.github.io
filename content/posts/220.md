---
title: "GO基础入门"
date: 2024-06-13T17:49:08+08:00
lastmod: 2024-06-15T21:17:36+08:00
summary: "Go简介 Go语言，Go 语言起源 2007 年，并于 2009 年正式对外发布，又称为Golang，是由Google三位顶尖大神开发的一种静态类型、编译型语言。它旨在提高多核处理器的编程效率，并且使得编程更加简单和高效。Go语言具有以下特点： 简洁性 ：Go语言的语法简单，易于学习，并且容易编写。 高性能 ：Go语言…"
url: /posts/220/
categories: ["后端"]
tags: ["GO"]
ShowToc: false
---
<h2>Go简介</h2>
<p>Go语言，Go 语言起源 2007 年，并于 2009 年正式对外发布，又称为Golang，是由Google三位顶尖大神开发的一种静态类型、编译型语言。它旨在提高多核处理器的编程效率，并且使得编程更加简单和高效。Go语言具有以下特点：</p>
<ol>
<li><strong>简洁性</strong>：Go语言的语法简单，易于学习，并且容易编写。</li>
<li><strong>高性能</strong>：Go语言是编译型语言，编译后的程序运行速度快。</li>
<li><strong>并发性</strong>：Go语言内置了并发编程的支持，通过goroutine和channel简化了并发编程。</li>
<li><strong>垃圾回收</strong>：Go语言拥有自动垃圾回收机制，减轻了程序员的负担。</li>
<li><strong>内存安全</strong>：Go语言在编译期间进行多种检查，确保内存安全。</li>
<li><strong>丰富的标准库</strong>：Go语言拥有丰富的标准库，提供了许多实用的功能。</li>
<li><strong>跨平台</strong>：Go语言支持跨平台编译，可以在多种操作系统上运行。</li>
<li><strong>工具链</strong>：Go语言拥有强大的工具链，包括gofmt（代码格式化工具）、go test（测试工具）等。</li>
</ol>
<p>Go语言适用于多种场景，包括但不限于：</p>
<ul>
<li>网络编程和服务器端应用</li>
<li>分布式系统</li>
<li>微服务架构</li>
<li>云计算</li>
<li>DevOps工具和自动化脚本</li>
</ul>
<p>Go语言的这些特性使其成为现代软件开发中非常受欢迎的选择之一。</p>
<p>注：因为go官网golang.org在国内打不开，可以使用<code>godoc -http=:8080</code>在自己本地的8080端口开一个一样的官方进行浏览</p>
<h2>Go的基础结构与基本数据类型</h2>
<h3>文件名、关键字与标识符</h3>
<p>如果Go文件的文件名由多个部分组成，则使用下划线 <code>_</code> 对它们进行分隔，如 <code>scanner_test.go</code> 。文件名不包含空格或其他特殊字符。</p>
<p>注意：<code>_</code> 本身就是一个特殊的标识符，被称为空白标识符。它可以像其他标识符那样用于变量的声明或赋值（任何类型都可以赋值给它），但任何赋给这个标识符的值都将被抛弃，因此这些值不能在后续的代码中使用，也不可以使用这个标识符作为变量对其它变量进行赋值或运算。</p>
<p>在编码过程中，你可能会遇到没有名称的变量、类型或方法。虽然这不是必须的，但有时候这样做可以极大地增强代码的灵活性，这些变量被统称为匿名变量。</p>
<h3>Go 代码中会使用到的 25 个关键字或保留字</h3>
<table>
<thead>
<tr>
<th>break</th>
<th>default</th>
<th>func</th>
<th>interface</th>
<th>select</th>
</tr>
</thead>
<tbody>
<tr>
<td>case</td>
<td>defer</td>
<td>go</td>
<td>map</td>
<td>struct</td>
</tr>
<tr>
<td>chan</td>
<td>else</td>
<td>goto</td>
<td>package</td>
<td>switch</td>
</tr>
<tr>
<td>const</td>
<td>fallthrough</td>
<td>if</td>
<td>range</td>
<td>type</td>
</tr>
<tr>
<td>continue</td>
<td>for</td>
<td>import</td>
<td>return</td>
<td>var</td>
</tr>
</tbody>
</table>
<h3>Go 语言还有 36 个预定义标识符</h3>
<p><strong>其中包含了基本类型的名称和一些基本的内置函数</strong></p>
<table>
<thead>
<tr>
<th>append</th>
<th>bool</th>
<th>byte</th>
<th>cap</th>
<th>close</th>
<th>complex</th>
<th>complex64</th>
<th>complex128</th>
<th>uint16</th>
</tr>
</thead>
<tbody>
<tr>
<td>copy</td>
<td>false</td>
<td>float32</td>
<td>float64</td>
<td>imag</td>
<td>int</td>
<td>int8</td>
<td>int16</td>
<td>uint32</td>
</tr>
<tr>
<td>int32</td>
<td>int64</td>
<td>iota</td>
<td>len</td>
<td>make</td>
<td>new</td>
<td>nil</td>
<td>panic</td>
<td>uint64</td>
</tr>
<tr>
<td>print</td>
<td>println</td>
<td>real</td>
<td>recover</td>
<td>string</td>
<td>true</td>
<td>uint</td>
<td>uint8</td>
<td>uintptr</td>
</tr>
</tbody>
</table>
<h2>学习笔记</h2>
<p><strong>因为go官网golang.org在国内打不开，可以使用<code>godoc -http=:8080</code>在自己本地的8080端口开一个一样的官方进行浏览</strong></p>
<h3>项目结构</h3>
<p>根据Go约定，gopath目录下应包含三个文件夹：</p>
<ul>
<li>bin：存放编译后的可执行文件</li>
<li>pkg：存放编译后生成的包文件，一般是以<code>.a</code>为后缀的文件</li>
<li>src：存放项目的源码</li>
</ul>
<h3>包别名</h3>
<p>在导入包时可以为其取别名，例如给”fmt“取别名为std：<code>import std &quot;fmt&quot;</code>，此外有一个特别用法，就是别名取为<code>.</code>，这样在调用该包函数时前面无需写包名，被称为省略调用，如下：</p>
<pre><code class="language-go">import . &quot;fmt&quot;
func main(){
    // 省略fmt包名调用
    Println(&quot;Hello World!&quot;)
}</code></pre>
<p>当然，省略调用不能和别名同时使用，不然别名就没有意义了</p>
<h3>访问权限</h3>
<p>在Golang中根据约定函数名<strong>首字母小写</strong>即为<code>private</code>，函数名<strong>首字母大写</strong>即为<code>public</code></p>
<h3>go基本类型</h3>
<ul>
<li>bool：布尔型，1字节，只有true和false，不能用数字代表</li>
<li>int/uint：整型，根据运行平台可能为32或64位
<ul>
<li>int8/uint8：8位整型，1字节</li>
</ul></li>
<li>byte：字节型（uint8的别名，无符号8位整型）</li>
<li>rune：int32的别名</li>
<li>float/float64：4/8字节，精确到小数点后7/15位</li>
<li>复数：complex64/complex128，长度：8/16字节</li>
<li>足够保存指针的32位或64位整型：uintptr</li>
<li>其他值类型：array，struct，string</li>
<li>引用类型：slice（切片），map，chan（通道）</li>
<li>接口类型：interface</li>
<li>函数类型：func</li>
</ul>
<h3>变量声明</h3>
<pre><code class="language-go">// 全局变量
var a int = 1
var b int
var c = 1
d := 1
var (e = 1, f = 2)
// 局部变量
func main(){
    var a,b,c,d = 1,2,3,4
    x,y,z := 1,2,3
}</code></pre>
<pre><code class="language-go">var a int = 1
b := string(a)
fmt.Println(b) // 输出A
// 如果想要输出字符串的65，需要使用包“strconv”
b := strconv.Itoa(a)
fmt.Println(b) // 输出字符串65
c := strconv.AtoI(b) // 从字符串转回数字</code></pre>
<h3>常量</h3>
<p>一般规范中定义常量使用全部大写字母来定义，但是由于golang规则中首字母大写表示可以被外部包调用，如果想声明私有常量一般会用<code>_</code>或小写字母<code>c</code>开头，如：</p>
<pre><code class="language-go">const _MAX = 10
const cNAME = &quot;JOJO&quot;</code></pre>
<p>常量的右侧只能是常量或常量表达式，使用函数也只能是内置的函数，如果不赋值将使用上一行的值</p>
<pre><code class="language-go">const (
    A = &quot;123&quot;
    B = len(a)
    C
    D
)</code></pre>
<p>因此上述代码中a为“123”，b为3，c和d也都为3</p>
<p>注意：使用上一行的值时要保证每行声明的常量个数要一样</p>
<pre><code class="language-go">const (
    A, B = 1, 2
    C // 这是不行的，与上一行个数不一致
    C, D // 这个可以，c为1，d为2
)</code></pre>
<p>在Golang中，有<code>iota</code>作为常量的计数器，初始为0，每定义一个常量iota就会增加1，同时每遇到<code>const</code>时<code>iota</code>都会变为0，因此枚举应写在一个常量组中</p>
<h3>运算符</h3>
<p><img src="/images/external/376957ea5b57f760efce.png" alt="image-20240602102145861" /></p>
<p><strong><code>&lt;&lt;</code></strong>运算符将一个数左移 n 位，相当于将该数<strong>乘</strong>以$2^n$；<strong><code>&gt;&gt;</code></strong>运算符将一个数右移 n 位，相当于将该数<strong>除</strong>以$2^n$。</p>
<p>在golang中，<code>++</code>和<code>--</code>是作为语句存在，而不像其他语言中作为表达式，因此不能放在等号右侧，只能作为单独的一行</p>
<h3>控制语句</h3>
<h4>分支</h4>
<p>golang中的 if 后面没有小括号（），直接用空格分隔if关键字与条件，类似python，但是后面依旧是在同一行接左大括号，左大括号不能换行，否则编译错误。并且可以在写条件的部分声明新变量，此变量为局部变量，如果与外部变量同名则会隐藏外部变量，使用定义的局部变量，定义变量与后面条件用分号<code>;</code>分隔</p>
<p>switch：golang中的switch不需要每个case都写break，找到符合条件的case后会自动break跳出整个switch，如果你想要它继续向下验证可以使用<code>fallthrough</code>显式声明，并且golang中的switch也有不同形式</p>
<pre><code class="language-go">// 第一种
a := 1
switch a {
    case 0:
        fmt.Println(&quot;a=0&quot;)
    case 1:
        fmt.Println(&quot;a=1&quot;) // 只会输出a=1
    default:
        fmt.Println(&quot;None&quot;)
}
// 第二种
a := 1
switch {
    case a &gt;= 0:
        fmt.Println(&quot;a&gt;=0&quot;) // 只会输出a&gt;=0
    case a &gt;= 1:
        fmt.Println(&quot;a&gt;=1&quot;)
    default:
        fmt.Println(&quot;None&quot;)
}
// 使用 fallthrough
a := 1
switch {
    case a &gt;= 0:
        fmt.Println(&quot;a&gt;=0&quot;) // 会输出a&gt;=0
        fallthrough
    case a &gt;= 1:
        fmt.Println(&quot;a&gt;=1&quot;) // 也会输出a&gt;=0
    default:
        fmt.Println(&quot;None&quot;)
}
// 局部变量a
switch a := 1; {
    case a &gt;= 0:
        fmt.Println(&quot;a&gt;=0&quot;) // 会输出a&gt;=0
        fallthrough
    case a &gt;= 1:
        fmt.Println(&quot;a&gt;=1&quot;) // 也会输出a&gt;=0
    default:
        fmt.Println(&quot;None&quot;)
}</code></pre>
<h4>循环</h4>
<p>golang中的循环只有<code>for</code>一种，但是这里的for更多样，如下：</p>
<pre><code class="language-go">// 第一种
for {
    a++
    if a &gt; 3 {
        break
    }
}
// 第二种
for a &lt; 3 {
    a++
}
// 第三种
for a := 0; a &lt; 3; a++ {
    fmt.println(a)
}</code></pre>
<h3>break,continue,goto</h3>
<p>go中的break和continue除了在其他语言中的用法外还可以配合标签使用</p>
<pre><code class="language-go">LABLE:
    for {
        for i := 0; i &lt; 3; i++ {
            if i &gt; 1 {
                break LABLE // 直接跳出LABLE处的循环
            }
        }
    }
// go to
for {
    for i := 0; i &lt; 3; i++ {
        if i &gt; 1 {
            goto LABLE // 直接跳到LABLE处开始执行
        }
    }
}
LABLE:
    fmt.Println(&quot;goto 到此处&quot;)</code></pre>
<p>continue也是同理，带上标签就是跳过标签处的当前这次循环</p>
<h3>数组</h3>
<p>go中的数组为值类型，在使用时是对数组进行拷贝，并不是像其他语言那样是引用类型指向同一个地址</p>
<p>数组之间可以使用<code>==</code>和<code>!=</code>进行比较，但是不能使用<code>&lt;</code>和<code>&gt;</code>，并且类型不同也是不能进行比较</p>
<pre><code class="language-go">var a [2]int // 类型为 长度为2的整型
var a [1]int // 类型为 长度为1的整型，两个数组类型不同
// 前19个元素为0，第20个元素为1
a := [20]int{19: 1}
// 已知数组内容可以用 ... 省略数组元素个数
a := [...]int{1,2,3,4,5}
a := [...]int{19: 1} // 这样也是可以的，和上面的效果一样</code></pre>
<p>指向数组的指针和指针数组</p>
<pre><code class="language-go">// 指向数组的指针
a := [...]int{3: 1}
var p *[4]int = &amp;a // p的值为 &amp;[0,0,0,1]，就是打印a的值前面加上了&amp;，表示取这个数组的地址
// new
p := new([5]int) // 使用new这种形式得到的依旧是指针，p的值为 &amp;[0,0,0,0,0]
// 指针数组
x, y = 1, 2
a := [...]*int{&amp;x, &amp;y} // 是一个指针类型的数组，里面存放了x和y的地址</code></pre>
<p>go中也是依然有多维数组，也是只能省略前面不能省略后面</p>
<pre><code class="language-go">a := [...][3]{{1,1,1},{2,2,2}}</code></pre>
<p>用golang实现一下经典的冒泡排序</p>
<pre><code class="language-go">// 冒泡排序
a := [...]int{5, 2, 6, 3, 9}
fmt.Println(&quot;排序前：&quot;, a)
num := len(a) // 提前计算长度免得每次循环都要重新计算浪费资源
for i := 0; i &lt; num; i++ {
    for j := 0; j &lt; num; j++ {
        if a[i] &lt; a[j] {
            a[i], a[j] = a[j], a[i] // 真的方便，而且不用再定义一个temp
        }
    }
}
fmt.Println(&quot;排序后&quot;, a)</code></pre>
<h3>切片Slice</h3>
<p>切片为引用类型，其作为变长数组的替代方案，可以关联底层数组的局部或全部，可以直接创建或从底层数组获取生成</p>
<p>如果多个slice指向相同的底层数组，其中一个的值改变会影响全部</p>
<p>声明切片和数组类似，只不过中括号里是空的</p>
<pre><code class="language-go">var s []int // 打印出来是 []</code></pre>
<p>slice从数组中取元素</p>
<pre><code class="language-go">a := [10]int{0,1,2,3,4,5,6,7,8,9}
s := a[5] // 取索引为5的值，打印出来是 5
s := a[5: 10] // 范围左闭右开，即取索引5到9的数据，打印出来是 [5,6,7,8,9]
s := a[5:] // 结果和上面一样
s := a[:5] // 取前五个元素，依然是左闭右开，打印出来是 [0,1,2,3,4]</code></pre>
<p>切片比较正式的创建是使用make创建</p>
<pre><code class="language-go">make([]T, len, cap) // len表示存储元素的个数，cap表示容量，cap可以省略，省略代表cap和len的值一样</code></pre>
<p>补充：函数传参修改slice时推荐使用返回</p>
<pre><code class="language-go">package main

import &quot;fmt&quot;

func Keng(s []int) []int {
    s = append(s, 3)
    return s
}
func main() {
    s := make([]int, 0)
    fmt.Println(s)
    s = Keng(s)
    fmt.Println(s)
}
/* 输出结果
[]
[3]
*/</code></pre>
<p>make时slice的长度和容量都为0，为了避免空间浪费可以使用返回的形式对其重新赋值</p>
<h4>Reslice</h4>
<p>Reslice时索引以被slice的切片为准</p>
<p>索引不可以超过被slice的切片的容量cap0值</p>
<p>索引越界不会导致底层数组的重新分配而是引发错误</p>
<pre><code class="language-go">func main() {
    a := []byte{&#039;a&#039;, &#039;b&#039;, &#039;c&#039;, &#039;d&#039;, &#039;e&#039;, &#039;f&#039;, &#039;g&#039;, &#039;h&#039;, &#039;i&#039;, &#039;j&#039;, &#039;k&#039;}
    sa := a[2:5]
    fmt.Println(string(sa)) // cde
    fmt.Println(len(sa), cap(sa)) // 3 9
    sb := sa[3:5]
    fmt.Println(string(sb)) // fg
}</code></pre>
<p><img src="/images/external/69643677266737739fb9.png" alt="image-20240609120142179" /></p>
<h4>Append</h4>
<p>可以在glice尾部追加元素</p>
<p>可以将一个slice追加在另一个slice尾部</p>
<pre><code class="language-go">func main() {
    s1 := make([]int, 3, 6)
    fmt.Printf(&quot;%p\n&quot;, s1) // 0xc00000e3f0
    s1 = append(s1, 1, 2, 3)
    fmt.Printf(&quot;%v %p\n&quot;, s1, s1) // [0 0 0 1 2 3] 0xc00000e3f0
    s1 = append(s1, 1, 2, 3)
    fmt.Printf(&quot;%v %p\n&quot;, s1, s1) // [0 0 0 1 2 3 1 2 3] 0xc000016180
}</code></pre>
<p>如果最终长度未超过追加到slice的容量则返回原始slice</p>
<p>如果超过追加到的slice的容量则将重新分配数组并拷贝原始数据</p>
<pre><code class="language-go">func main() {
    a := []int{1, 2, 3, 4, 5}
    s1 := a[2:5]
    s2 := a[1:3]
    fmt.Println(s1, s2) // [3 4 5] [2 3]
    s1[0] = 9
    fmt.Println(s1, s2) // [9 4 5] [2 9]
}</code></pre>
<p>slice指向数组，未超出容量时修改其中一个的值，其他的值也会跟着改变</p>
<pre><code class="language-go">func main() {
    a := []int{1, 2, 3, 4, 5}
    s1 := a[2:5]
    s2 := a[1:3]
    fmt.Println(s1, s2) // [3 4 5] [2 3]
    s2 = append(s2, 1, 2, 3, 4, 5)
    s1[0] = 9
    fmt.Println(s1, s2) // [9 4 5] [2 3 1 2 3 4 5]
}</code></pre>
<p>超过容量后会重新分配地址，修改其中一个的值，将不会影响到新分配的slice</p>
<h4>copy</h4>
<pre><code class="language-go">func main() {
    s1 := []int{1, 2, 3, 4, 5}
    s2 := []int{7, 8, 9}
    copy(s1, s2)
    fmt.Println(s1) // [7 8 9 4 5]
}</code></pre>
<pre><code class="language-go">func main() {
    s1 := []int{1, 2, 3, 4, 5}
    s2 := []int{7, 8, 9}
    copy(s2, s1)
    fmt.Println(s2) // [1 2 3]
}</code></pre>
<p>也可以只拷贝一部分</p>
<pre><code class="language-go">func main() {
    s1 := []int{1, 2, 3, 4, 5}
    s2 := []int{7, 8, 9}
    copy(s2, s1[:2])
    fmt.Println(s2) // [1 2 9]
}</code></pre>
<p>也可以这样</p>
<pre><code class="language-go">func main() {
    s1 := []int{1, 2, 3, 4, 5}
    s2 := []int{7, 8, 9}
    copy(s1[2:4], s2[:2])
    fmt.Println(s1) // [1 2 7 8 5]
}</code></pre>
<h3>map</h3>
<p>类似其它语言中的哈希表或者字典，以key-value形式存储数据</p>
<p>Key必须是支持==或!=比较运算的类型，不可以是函数、map或slice</p>
<p>Map查找比线性搜索快很多，但比使用索引访问数据的类型慢100倍</p>
<p>Map使用make0创建，支持:=这种简写方式</p>
<p>make([keyType]valueType,cap)，cap表示容量，可省略</p>
<p>超出容量时会自动扩容，但尽量提供一个合理的初始值</p>
<p>使用len0)获取元素个数</p>
<p>键值对不存在时自动添加，使用delete0)删除某键值对</p>
<p>使用 for range 对map和slice进行迭代操作</p>
<pre><code class="language-go">var m map[int]string = make(map[int]string) // 声明map</code></pre>
<pre><code class="language-go">func main() {
    m := make(map[int]string)
    m[1] = &quot;go&quot;
    a := m[1]
    fmt.Println(a) // go
    delete(m, 1)
    a = m[1]
    fmt.Println(a) //  (输出的是空)
}</code></pre>
<p>map的值为一个map</p>
<pre><code class="language-go">func main() {
    var m map[int]map[int]string
    m = make(map[int]map[int]string)
    a, ok := m[2][1]
    fmt.Println(a, ok) //  false (表示map没有声明)
    if !ok {
        m[2] = make(map[int]string)
    }
    m[2][1] = &quot;OKK&quot;
    a, ok = m[2][1]
    fmt.Println(a, ok) // OKK true (表示map声明了)
}</code></pre>
<h4>迭代</h4>
<pre><code class="language-go">// 迭代slice
for i,v := range slice {
    // i是索引，v是slice的拷贝
}
// 迭代map
for i,v := range map {
    // i是键，v是map的拷贝
}</code></pre>
<p>v只是一个拷贝，对v操作不会影响slice(map)本身</p>
<pre><code class="language-go">func main() {
    sm := make([]map[int]string, 5)
    for _, v := range sm {
        v = make(map[int]string, 1)
        v[1] = &quot;OK&quot;
        fmt.Println(v)
    }
    fmt.Println(sm)
}
/* 输出结果
map[1:OK]
map[1:OK]
map[1:OK]
map[1:OK]
map[1:OK]
[map[] map[] map[] map[] map[]]
*/</code></pre>
<p>上面并不会影响切片map本身，如果想操作其本身，可以使用下面代码</p>
<pre><code class="language-go">func main() {
    sm := make([]map[int]string, 5)
    for i := range sm {
        sm[i] = make(map[int]string, 1)
        sm[i][1] = &quot;OK&quot;
        fmt.Println(sm[i])
    }
    fmt.Println(sm)
}
/* 输出结果
map[1:OK]
map[1:OK]
map[1:OK]
map[1:OK]
map[1:OK]
[map[1:OK] map[1:OK] map[1:OK] map[1:OK] map[1:OK]]
*/</code></pre>
<p><strong>对map实现间接排序</strong></p>
<pre><code class="language-go">func main() {
    m := map[int]string{1: &quot;a&quot;, 2: &quot;b&quot;, 3: &quot;c&quot;, 4: &quot;d&quot;, 5: &quot;e&quot;}
    s := make([]int, len(m))
    i := 0
    for k, _ := range m {
        s[i] = k
        i++
    }
    sort.Ints(s) // 对整型进行排序
    fmt.Println(s)
}</code></pre>
<p>迭代map取出的key顺序是随机的，将取出的key放入slice中，再对其排序可以实现间接对map的key进行排序</p>
<p><strong>将map的key和value对调</strong></p>
<pre><code class="language-go">func main() {
    m := map[int]string{1: &quot;a&quot;, 2: &quot;b&quot;, 3: &quot;c&quot;, 4: &quot;d&quot;, 5: &quot;e&quot;}
    fmt.Println(m) // map[1:a 2:b 3:c 4:d 5:e]
    m2 := make(map[string]int)
    for k, v := range m {
        m2[v] = k
    }
    fmt.Println(m2) // map[a:1 b:2 c:3 d:4 e:5]
}</code></pre>
<h3>函数function</h3>
<p>Go 函数 不支持 嵌套、重载和默认参数</p>
<p>但支持以下特性：</p>
<ul>
<li>无需声明原型:不定长度变参、多返回值、命名返回值参数</li>
<li>匿名函数、闭包</li>
</ul>
<p>定义函数使用关键字 func，且左大括号不能另起一行</p>
<p>函数也可以作为一种类型使用</p>
<pre><code class="language-go">// 不定长度变参 相当于拷贝一份并放入slice中 不定长度变参只能放在参数最后面
func A(b string, a ...int){
    fmt.Println(a)
}
// 多返回值 命名返回值参数
func A() (a,b,c int){
    a,b,c = 1,2,3 // a,b,c已经声明过了，这里可以直接赋值
    return // 上面返回值处已经声明了要返回的a,b,c，这里可以省略
}
// 匿名函数
a := func(){
    fmt.Println(&quot;Func&quot;)
} // 可以使用a()来调用这个函数</code></pre>
<p>匿名函数不能作为顶级函数，也就是不能作为最外层函数</p>
<p><strong>闭包</strong></p>
<pre><code class="language-go">func main() {
    f := closure(10)
    fmt.Println(f(1)) // 
    fmt.Println(f(2)) // 
}

func closure(x int) func(int) int {
    fmt.Printf(&quot;%p\n&quot;, &amp;x) // 
    return func(y int) int {
        fmt.Printf(&quot;%p\n&quot;, &amp;x) // 
        return x + y
    }
}
/* 输出结果
0xc000096068
0xc000096068
11
0xc000096068
12
*/</code></pre>
<h4>defer</h4>
<p>defer的执行方式类似其它语言中的析构函数，在函数体执行结束后</p>
<p>按照调用顺序的相反顺序逐个执行</p>
<p>即使函数发生严重错误也会执行</p>
<p>支持匿名函数的调用</p>
<p>常用于资源清理、文件关闭、解锁以及记录时间等操作</p>
<p>通过与匿名函数配合可在return之后修改函数计算结果</p>
<p>如果函数体内某个变量作为defer时匿名函数的参数，则在定义defer</p>
<p>时即已经获得了拷贝，否则则是引用某个变量的地址</p>
<p>Go 没有异常机制，但有 panic/recover 模式来处理错误</p>
<p>Panic 可以在任何地方引发，但recover<strong>只有</strong>在defer调用的函数中有效</p>
<pre><code class="language-go">for i := 0; i &lt; 3; i++ {
    defer fmt.Println(i)
}</code></pre>
<p>上述代码打印结果为2 1 0，defer先进后出，为栈结构</p>
<p>defer与闭包一起使用</p>
<pre><code class="language-go">for i := 0; i &lt; 3; i++ {
    defer func() {
        fmt.Println(i)
    }() // 自执行函数，如果把前面的匿名函数赋给变量a，就和a()一样了
}</code></pre>
<p>上述代码执行结果为3 3 3，内层函数没有i，向外层寻找找到了i，拿到了i的引用也就是i的地址，循环结束时i为3，所以闭包调用i的都为3</p>
<p><strong>panic与recover</strong></p>
<pre><code class="language-go">func main() {
    A()
    B()
    C()
}
func A() {
    fmt.Println(&quot;func A&quot;)
}
func B() {
    panic(&quot;panic in B&quot;)
}
func C() {
    fmt.Println(&quot;func C&quot;)
}
/* 输出结果
func A
panic: panic in B
报错
*/</code></pre>
<p>调用panic之后程序不会再执行后面的内容，这个时候就可以使用recover再回复回来，注：<strong>recover只有在defer调用的函数中有效</strong></p>
<pre><code class="language-go">func main() {
    A()
    B()
    C()
}
func A() {
    fmt.Println(&quot;func A&quot;) // func A
}
func B() {
    defer func() {
        if err := recover(); err != nil {
            fmt.Println(&quot;recover in B&quot;) // recover in B
            fmt.Println(err) // panic in B
        }
    }()
    panic(&quot;panic in B&quot;)
}
func C() {
    fmt.Println(&quot;func C&quot;) // func C
}</code></pre>
<p>调用recover之后将不会调用panic，打印<code>err</code>时会输出<code>panic in B</code></p>
<h4><strong>疑问代码</strong></h4>
<p>以下代码输出结果不一致</p>
<pre><code class="language-go">func main() {
    var fs = [4]func(){}
    for i := 0; i &lt; 4; i++ {
        defer fmt.Println(&quot;defer i = &quot;, i)
        defer func() {
            fmt.Println(&quot;defer_closure i = &quot;, i)
        }()
        fs[i] = func() {
            fmt.Println(&quot;closure i = &quot;, i)
        }
    }
    for _, f := range fs {
        f()
    }
}
/* 输出结果
closure i =  0
closure i =  1
closure i =  2
closure i =  3
defer_closure i =  3
defer i =  3
defer_closure i =  2
defer i =  2
defer_closure i =  1
defer i =  1
defer_closure i =  0
defer i =  0
*/</code></pre>
<p>上述代码原来的输出结果如下</p>
<pre><code>closure i =  4
closure i =  4
closure i =  4
closure i =  4
defer_closure i =  4
defer i =  3
defer_closure i =  4
defer i =  2
defer_closure i =  4
defer i =  1
defer_closure i =  4
defer i =  0</code></pre>
<p>这是为什么，go发生了什么重大的改变吗？</p>
<h3>结构struct</h3>
<p>Go 中的struct与C中的struct非常相似，并且Go没有class</p>
<p>使用 type<Name>struct{} 定义结构，名称遵循可见性规则</p>
<p>支持指向自身的指针类型成员</p>
<p>支持匿名结构，可用作成员或定义成员变量</p>
<p>匿名结构也可以用于map的值</p>
<p>可以使用字面值对结构进行初始化</p>
<p>允许直接通过指针来读写结构成员</p>
<p>相同类型的成员可进行直接拷贝赋值</p>
<p>支持 ==与!=比较运算符，但不支持&gt;或&lt;</p>
<p>支持匿名字段，本质上是定义了以某个类型名为名称的字段</p>
<p>嵌入结构作为匿名字段看起来像继承，但不是继承</p>
<p>可以使用匿名字段指针</p>
<pre><code class="language-go">package main

import &quot;fmt&quot;

type person struct {
    Name string
    Age  int
}

func main() {
    a := person{
        Name: &quot;jojo&quot;,
    }
    a.Age = 19
    fmt.Println(a)
    A(a)
    fmt.Println(a)
}
func A(per person) {
    per.Age = 12
    fmt.Println(&quot;func A&quot;, per)
}
/* 输出结果
{jojo 19}
func A {jojo 12}
{jojo 19}
*/</code></pre>
<p>在函数A中只是一个值拷贝，可以使用指针来修改原值，变成引用</p>
<pre><code class="language-go">package main

import &quot;fmt&quot;

type person struct {
    Name string
    Age  int
}

func main() {
    a := person{&quot;jojo&quot;, 19} // 也可以直接这样赋值
    fmt.Println(a)
    A(&amp;a)
    fmt.Println(a)
}
func A(per *person) {
    per.Age = 12
    fmt.Println(&quot;func A&quot;, per)
}
/* 输出结果
{jojo 19}
func A &amp;{jojo 12}
{jojo 12}
*/</code></pre>
<p>在go中哪怕取了地址，也可以像之前一样修改值，如下</p>
<pre><code class="language-go">a := &amp;person{
    Name: &quot;jojo&quot;
}
a.Name = &quot;Dio&quot; // 完全可以并且是正确的，这是go方便的地方</code></pre>
<p>匿名结构</p>
<pre><code class="language-go">a := struct {
    Name string
    Age int
}{
    Name: &quot;jojo&quot;,
    Age: 19,
}</code></pre>
<p>go中的组合，对标继承的存在</p>
<pre><code class="language-go">type human struct{
    Sex int
}
type teacher struct{
    human
    Name string
    Age int
}
type student struct {
    human
    Name string
    Age int
}
func main(){ 
    a := teacher{Name: &quot;joe&quot;,Age: 19,human: human{Sex: 0}}
    b := student{Name: &quot;joe&quot;,Age: 20,human: human{Sex: 1}}
    a.Name = &quot;joe2&quot;
    a.Age = 13
    a.human.Sex = 10 // 可以这样
    a.Sex = 100 // 也可以直接这样
    fmt.Println(a,b)
}</code></pre>
<h3>方法method</h3>
<p>Go 中虽没有class，但依旧有method</p>
<p>通过显示说明receiver来实现与某个类型的组合</p>
<p>只能为同一个包中的类型定义方法</p>
<p>Receiver可以是类型的值或者指针</p>
<p>不存在方法重载</p>
<p>可以使用值或指针来调用方法，编译器会自动完成转换</p>
<p>从某种意义上来说，方法是函数的语法糖，因为receiver其实就是方法所接收的第1个参数(Method Valuevs，Method Expression)</p>
<p>如果外部结构和嵌入结构存在同名方法，则优先调用外部结构的方法</p>
<p>类型别名不会拥有底层类型所附带的方法</p>
<p>方法可以调用结构中的非公开字段</p>
<pre><code class="language-go">package main

import &quot;fmt&quot;

type A struct {
    Name string
}
type B struct {
    Name string
}

func main() {
    a := A{}
    a.Print() // A
    fmt.Println(a.Name) // AA
    b := B{}
    b.Print() // B
    fmt.Println(b.Name) // 输出是空，因为Name没有值
}
func (a *A) Print() {
    a.Name = &quot;AA&quot;
    fmt.Println(&quot;A&quot;)
}
func (b B) Print() {
    b.Name = &quot;BB&quot;
    fmt.Println(&quot;B&quot;)
}</code></pre>
<p>类型别名也可以绑定方法</p>
<pre><code class="language-go">type TZ int
func main(){
    var a TZ
    a.Print() // TZ
}
func (a *TZ)Print(){
    fmt.Println(&quot;TZ&quot;)
}</code></pre>
<p>还可以这样</p>
<pre><code class="language-go">type TZ int
func main(){
    var a TZ
    a.Print() // Method Valuevs
    (*TZ).Print(&amp;a) // Method Expression
}
func (a *TZ)Print(){
    fmt.Println(&quot;TZ&quot;)
}
/* 输出结果
TZ
TZ
*/</code></pre>
<h3>接囗interface</h3>
<p>接口是一个或多个方法签名的集合</p>
<p>只要某个类型拥有该接口的所有方法签名，即算实现该接口，无需显示</p>
<p>声明实现了哪个接口，这称为 Structural Typing</p>
<p>接口只有方法声明，没有实现，没有数据字段</p>
<p>接口可以匿名嵌入其它接口，或嵌入到结构中</p>
<p>将对象赋值给接口时，会发生拷贝，而接口内部存储的是指向这个</p>
<p>复制品的指针，既无法修改复制品的状态，也无法获取指针</p>
<p>只有当接口存储的类型和对象都为nil时，接口才等于nil</p>
<p>接口调用不会做receiver的自动转换</p>
<p>接口同样支持匿名字段方法</p>
<p>接口也可实现类似OOP中的多态</p>
<p>空接口可以作为任何类型数据的容器</p>
<pre><code class="language-go">package main

import &quot;fmt&quot;

type USB interface {
    Name() string
    Connecter
}
type Connecter interface {
    Connect()
}

type PhoneConnecter struct {
    name string
}

func (pc PhoneConnecter) Name() string {
    return pc.name
}
func (pc PhoneConnecter) Connect() {
    fmt.Println(&quot;Connected:&quot;, pc.name)
}
func main() {
    a := PhoneConnecter{&quot;PhoneConnecter&quot;}
    a.Connect()
    Disconnect(a)
}

func Disconnect(usb USB) {
    if pc, ok := usb.(PhoneConnecter); ok {
        fmt.Println(&quot;Disconnect:&quot;, pc.name)
        return
    }
    fmt.Println(&quot;Unknown decive&quot;)
}
/* 输出结果
Connected: PhoneConnecter
Disconnect: PhoneConnecter
*/</code></pre>
<p>像Object一样，go中也可以看作所有结构都“继承”了空的接口</p>
<pre><code class="language-go">package main

import &quot;fmt&quot;

type empty interface{}
type USB interface {
    Name() string
    Connecter
}
type Connecter interface {
    Connect()
}

type PhoneConnecter struct {
    name string
}

func (pc PhoneConnecter) Name() string {
    return pc.name
}
func (pc PhoneConnecter) Connect() {
    fmt.Println(&quot;Connected:&quot;, pc.name)
}
func main() {
    a := PhoneConnecter{&quot;PhoneConnecter&quot;}
    a.Connect()
    Disconnect(a)
}

func Disconnect(usb interface{}) {
    switch v := usb.(type) {
    case PhoneConnecter:
        fmt.Println(&quot;Disconnect:&quot;, v.name)
    default:
        fmt.Println(&quot;Unknown decive&quot;)
    }
}
/* 输出结果
Connected: PhoneConnecter
Disconnect: PhoneConnecter
*/</code></pre>
<h3>反射reflection</h3>
<p>反射可大大提高程序的灵活性，使得interface{} 有更大的发挥余地</p>
<p>反射使用 TypeOf和 ValueOf函数从接口中获取目标对象信息</p>
<p>反射会将匿名字段作为独立字段(匿名字段本质)</p>
<p>想要利用反射修改对象状态，前提是interface.data是settable即 pointer-interface</p>
<p>通过反射可以“动态”调用方法</p>
<pre><code class="language-go">package main

import (
    &quot;fmt&quot;
    &quot;reflect&quot;
)

type User struct {
    Id   int
    Name string
    Age  int
}

func (u User) Hello() {
    fmt.Println(&quot;hello world&quot;)
}

func main() {
    u := User{1, &quot;jack&quot;, 20}
    Info(u)
}

func Info(o interface{}) {
    t := reflect.TypeOf(o)
    fmt.Println(&quot;type:&quot;, t.Name())
    if k := t.Kind(); k != reflect.Struct {
        fmt.Println(&quot;不合法的类型:&quot;, t.Kind())
        return
    }
    v := reflect.ValueOf(o)
    fmt.Println(&quot;Fields:&quot;)
    for i := 0; i &lt; t.NumField(); i++ {
        f := t.Field(i)
        val := v.Field(i).Interface()
        fmt.Printf(&quot;%6s: %v = %v\n&quot;, f.Name, f.Type, val)
    }
    for i := 0; i &lt; t.NumMethod(); i++ {
        m := t.Method(i)
        fmt.Printf(&quot;%6s: %v\n&quot;, m.Name, m.Type)
    }
}
/* 输出结果
type: User
Fields:
    Id: int = 1
  Name: string = jack
   Age: int = 20
 Hello: func(main.User)
*/

/* Info(&amp;u) 触发if报错的输出结果
type: 
不合法的类型: ptr
*/</code></pre>
<p>反射操作基本类型</p>
<pre><code class="language-go">func main() {
    x := 123
    v := reflect.ValueOf(&amp;x)
    v.Elem().SetInt(999)
    fmt.Println(x) // 999
}</code></pre>
<p>反射修改对象属性</p>
<pre><code class="language-go">package main

import (
    &quot;fmt&quot;
    &quot;reflect&quot;
)

type User struct {
    Id   int
    Name string
    Age  int
}

func main() {
    u := User{1, &quot;jack&quot;, 20}
    Set(&amp;u)
    fmt.Println(u)
}

func Set(o interface{}) {
    v := reflect.ValueOf(o)
    if v.Kind() == reflect.Ptr &amp;&amp; !v.Elem().CanSet() {
        fmt.Println(&quot;类型不对&quot;)
        return
    } else {
        v = v.Elem()
    }
    f := v.FieldByName(&quot;Name&quot;)
    if !f.IsValid() {
        fmt.Println(&quot;没找到这个字段&quot;)
        return
    }
    if f.Kind() == reflect.String {
        f.SetString(&quot;OK&quot;)
    }
}
/* 输出结果
{1 OK 20}
*/</code></pre>
<p>通过反射调用方法</p>
<pre><code class="language-go">package main

import (
    &quot;fmt&quot;
    &quot;reflect&quot;
)

type User struct {
    Id   int
    Name string
    Age  int
}

func (u User) Hello(Name string) {
    fmt.Println(&quot;Hello:&quot;, Name, &quot;,我是：&quot;, u.Name)
}

func main() {
    u := User{1, &quot;jack&quot;, 20}
    v := reflect.ValueOf(u)
    mv := v.MethodByName(&quot;Hello&quot;)
    args := []reflect.Value{reflect.ValueOf(&quot;joe&quot;)}
    mv.Call(args)
}
/* 输出结果
Hello: joe ,我是： jack
*/</code></pre>
<h3>并发concurrency</h3>
<h4>Channel</h4>
<p>Channel是 goroutine沟通的桥梁，大都是阻塞同步的</p>
<p>通过 make 创建，close 关闭</p>
<p>Channel是引用类型</p>
<p>可以使用 for range 来迭代不断操作 channel</p>
<p>可以设置单向或双向通道</p>
<p>可以设置缓存大小，在未被填满前不会发生阻塞</p>
<pre><code class="language-go">func main() {
    c := make(chan bool)
    go func() {
        fmt.Println(&quot;GO GO GO!&quot;) // GO GO GO!
        c &lt;- true
    }()
    &lt;-c
}</code></pre>
<pre><code class="language-go">func main() {
    c := make(chan bool)
    go func() {
        fmt.Println(&quot;GO GO GO!&quot;)
        c &lt;- true
        close(c)
    }()
    for v := range c {
        fmt.Println(v)
    }
}
/* 输出结果
GO GO GO!
true
*/</code></pre>
<p>多CPU核数</p>
<pre><code class="language-go">package main

import (
    &quot;fmt&quot;
    &quot;runtime&quot;
)

func main() {
    runtime.GOMAXPROCS(runtime.NumCPU())
    c := make(chan bool, 10)
    for i := 0; i &lt; 10; i++ {
        go Go(c, i)
    }
    for i := 0; i &lt; 10; i++ {
        &lt;-c
    }
}
func Go(c chan bool, index int) {
    a := 1
    for i := 0; i &lt; 10000000; i++ {
        a += 1
    }
    fmt.Println(index, a)
    c &lt;- true
}</code></pre>
<p>另一种方法，同步任务组</p>
<pre><code class="language-go">package main

import (
    &quot;fmt&quot;
    &quot;runtime&quot;
    &quot;sync&quot;
)

func main() {
    runtime.GOMAXPROCS(runtime.NumCPU())
    wg := sync.WaitGroup{}
    wg.Add(10)
    for i := 0; i &lt; 10; i++ {
        go Go(&amp;wg, i)
    }
    wg.Wait()
}
func Go(wg *sync.WaitGroup, index int) {
    a := 1
    for i := 0; i &lt; 10000000; i++ {
        a += 1
    }
    fmt.Println(index, a)
    wg.Done()
}</code></pre>
<h4>Select</h4>
<p>可处理一个或多个channel 的发送与接收</p>
<p>同时有多个可用的 channel时按随机顺序处理</p>
<p>可用空的 select 来阻塞 main 函数</p>
<p>可设置超时</p>
<pre><code class="language-go">package main

import (
    &quot;fmt&quot;
)

func main() {
    c1, c2 := make(chan int), make(chan string)
    o := make(chan bool, 2)
    go func() {
        for {
            select {
            case v, ok := &lt;-c1:
                if !ok {
                    o &lt;- true
                    break
                }
                fmt.Println(&quot;c1&quot;, v)
            case v, ok := &lt;-c2:
                if !ok {
                    o &lt;- true
                    break
                }
                fmt.Println(&quot;c2&quot;, v)
            }
        }
    }()
    c1 &lt;- 1
    c2 &lt;- &quot;hi&quot;
    c1 &lt;- 3
    c2 &lt;- &quot;hello&quot;
    close(c1)
    close(c2)
    for i := 0; i &lt; 2; i++ {
        &lt;-o
    }
}
/* 输出结果
c1 1
c2 hi
c1 3
c2 hello
*/</code></pre>
<h3>坑</h3>
<h4>时间time的坑</h4>
<p>time.format</p>
<p><img src="/images/external/1971e965b25f2d9500bf.png" alt="image-20240615205114208" /></p>
