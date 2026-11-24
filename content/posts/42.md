---
title: "MySQL数据库命令总结"
date: 2024-03-30T20:16:55+08:00
lastmod: 2024-03-30T20:16:55+08:00
summary: "1字符集、系统变量 查看MYSQL所支持的字符集show charset;show character set； 查看latin1字符集的字符序（校对规则）：show collation like ‘Latin1%’； 查看服务器字符集 show variables like 'character_set_server…"
url: /posts/42/
categories: ["数据库"]
tags: ["MySQL"]
ShowToc: false
---
<h2>1字符集、系统变量</h2>
<ol>
<li>
<p>查看MYSQL所支持的字符集show charset;show  character set；</p>
</li>
<li>
<p>查看latin1字符集的字符序（校对规则）：show collation  like ‘Latin1%’；</p>
</li>
<li>
<p>查看服务器字符集
show variables like 'character_set_server';
查看服务器校对规则
show variables like 'collation_server';</p>
<p>查看数据库的字符集：
show variables like 'character%'；
show create database shiyan\G;（集和规则）
status；（use 库名；之后再使用该命令）</p>
</li>
<li>
<p>查看客户端使用的字符集
show variables like 'character_set_client';</p>
</li>
<li>
<p>查看连接层字符集
show variables like 'character_set_connection';</p>
</li>
<li>
<p>查看MySQL查询结果字符集
show variables like 'character_set_results';</p>
</li>
<li>
<p>查看表的字符集show table status from 库名 like  ‘表名’;</p>
</li>
<li>
<p>查看表中所有列的字符集： show full columns from 表</p>
</li>
<li>
<p>显示系统变量：当前版本和系统时间
select @@version,current_date;</p>
</li>
<li>
<ol>
<li>系统变量：配置MySQL服务器的运行环境，可以用show variables查看</li>
<li>状态变量：监控MySQL服务器的运行状态，可以用show status查看</li>
<li>查看mysql的所有全局变量的值   SHOW GLOBAL VARIABLES  或者   SHOW VARIABLES</li>
<li>查看mysql的单个全局变量的值   SHOW GLOBAL VARIABLES LIKE 'wait_timeout'   或者  SELECT @@wait_timeout
上面的查询也可以用模糊查询，与上面结果一样的模糊查询语句
SHOW GLOBAL VARIABLES LIKE 'wait_time%'
SHOW GLOBAL VARIABLES LIKE '%wait%'
注意:查看mysql的全局变量也可以不加global关键字，例如  SHOW VARIABLES
SHOW  VARIABLES LIKE '%wait%'
SHOW  VARIABLES LIKE 'wait_timeout'
SHOW  VARIABLES LIKE '%wait%'</li>
<li>设置全局变量的值
SET GLOBAL  wait_timeout = 604800;
SET @@GLOBAL.wait_timeout = 604800
SET GLOBAL event_scheduler = ON; （事件调度器，查看事件是否开启）
SET @@global.event_scheduler = ON;
SET GLOBAL event_scheduler = 1;
SET @@global.event_scheduler = 1;
注意:有的时候发现修改不生效，需要关闭会话重新启动，也就是退出一下重新登录。但是发现重新启动mysql服务器变量又不生效，最好的办法就是修改mysql启动的默认值。
(1)windows下C:\ProgramData\MySQL\MySQL Server 5.7\my.ini，在[mysqld]栈下写下这个变量,例如修改mysql启动后默认开启任务调度(windows是修改my.ini文件)</li>
</ol>
</li>
</ol>
<p>修改:C:\ProgramData\MySQL\MySQL Server 5.7\my.ini   (注意是ProgramData目录下的my.ini文件才能生效，如果修改C:\Program Files\MySQL\MySQL Server 5.7\my-default.ini不会生效)</p>
<p>退出mysql  exit/quit</p>
<h2>2数据库命令</h2>
<ol>
<li>创建数据库：create database(schema) 库名 </li>
<li>修改数据库：alter database 库名 character set  字符集名
collate 字符校对规则；</li>
<li>显示数据库：show databases；</li>
<li>查看数据库字符集：show variables like 'character%'</li>
<li>删除数据库：drop  database  库名；</li>
<li>显示数据库结构：show create  database  库名；</li>
<li>打开数据库：use  库名；</li>
<li>查看当前数据库的名字：select database();
复习：show charset;或者  show  character set；</li>
</ol>
<p>理论：</p>
<ol>
<li>库名的命名规则：
<ol>
<li>不能与其他数据库重名，否则将发生错误。</li>
<li>名称可以由任意字母、阿拉伯数字、下划线（_）和“$”组成，可以使用上述的任意字符开头，但不能使用单独的数字，否则会造成它与数值相混淆。</li>
<li>名称最长可为64个字符，而别名最多可长达256个字符</li>
<li>不能使用MySQL关键字作为数据库名、表名。</li>
</ol></li>
</ol>
<h2>3存储引擎</h2>
<ol>
<li>
<p>查看mysql现在已提供什么存储引擎:
mysql&gt; show engines;</p>
</li>
<li>
<p>查看你mysql当前默认的存储引擎:
mysql&gt; show variables like '%storage_engine%';</p>
</li>
<li>
<p>查看个表用的存储引擎(在显示结果里参数engine后面的就表示该表当前用的存储引擎):
mysql&gt; show create table 表名;</p>
</li>
<li>
<p>修改表引擎方法
alter table 表名 engine=innodb;</p>
</li>
<li>
<p>在创建表之前使用下面命令设置存储引擎，之后创建的表就是该引擎
set  default_storage_engine=MyISAM;</p>
</li>
<li>
<p>创建表
create table ld
(id int not null);</p>
</li>
<li>
<p>show databases;</p>
</li>
<li>
<p>show engines;</p>
</li>
<li>
<p>create database student;</p>
</li>
<li>
<p>create database teacher;</p>
</li>
<li>
<p>drop database teacher;</p>
</li>
<li>
<p>show databases;</p>
</li>
</ol>
<h2>4表空间和表的创建、修改</h2>
<ol>
<li>
<p>可以查看数据库的表空间
show variables like 'innodb_data%';</p>
</li>
<li>
<p>查看目前属于哪种表空间
show variables like '%per_table%';
共享表空间“innodb_file_per_table”会显示为off。
独立表空间“innodb_file_per_table”会显示为on。
show variables like 'Innodb_file_per_table';
Innodb_file_per_table=1 独占表空间
Innodb_file_per_table=0 共享表空间</p>
</li>
<li>
<p>创建表(如果没有设置不可为空，默认可以为空）
create table 表名（列名 数据类型 not  null）；
案例：
create table if not exists student632(
studentno char(11) not null comment'学号',
sname char(8) not null comment'姓名',
sex enum('男','女') default '男' comment'性别',
birthdate date not null comment'出生日期',
entrance int(3) null comment'入学成绩',
phone varchar(12) not null comment'电话',
email varchar(20) not null comment'电子邮箱',
primary key(studentno)
);
特例：
daily float(3,1) default 0
primary key(studentno,courseno)
sc_no int(6) not null auto_increment  自动增量
sc_time timestamp not null default now()</p>
</li>
<li>
<p>查看表结构
desc+表名
show create table 表名；可以查看表结构、字符集、存储引擎。</p>
</li>
<li>
<p>显示当前数据库中所有表
show tables；</p>
</li>
<li>
<p>修改表</p>
<ol>
<li>新增一列，放置在已有列名之后或第一列为新增列。
alter table 表名 add 新列名 数据类型 是否为空 after 已有列名；
alter table 表名 add 新列名 数据类型 是否为空 first；</li>
<li>表重命名。
alter table 原表名 rename to 新表名；</li>
<li>修改数据类型
alter table 表名 modify 列名 新数据类型 默认值等（first或after 列名）；</li>
<li>删除某列
alter table 表名 drop 列名；</li>
<li>删除表
drop table 表名；</li>
<li>修改字段默认值（修改性别列默认值为女）
alter table mytest alter sex set default '女';
删除字段的默认值
alter table mytest alter sex drop default;</li>
<li>重命名列名alter
alter table 表名 change 原列名  新列名 新列数据类型 （first或after 列名）;</li>
</ol>
</li>
<li>
<p>临时表</p>
<ol>
<li>创建临时表
create temporary table 表名（与永久表一样）；</li>
<li>临时表
drop table 表名；</li>
</ol>
</li>
<li>
<p>修改表的字符集
alter table 表名 character set 字符集名称;</p>
</li>
<li>
<p>show global variables like 'local_infile';
set @@global.local_infile=1;或者set global local_infile=true;（临时改，重启服务器无效）
永久改：my.ini中添加：local_infile=1.
才允许导入CSV文件。</p>
</li>
<li>
<p>select version（）；查看当前mysql版本。</p>
</li>
<li>
<p>修改表中所有列的字符集为utf8
alter table 表名 convert to character set utf8;</p>
</li>
<li>
<p>在不同的库中复制表
use 自己的库；
create table student as select * from teaching.student;</p>
</li>
<li>
<p>复制表结构创建结构一样的表
create table 新表名 like 旧表名；</p>
</li>
<li>
<p>修改列的字符集
ALTER TABLE 表名 CHANGE 列名 新列名 CHARACTER SET character_name [COLLATE ...];
如：ALTER TABLE logtest CHANGE title title VARCHAR(100) CHARACTER SET utf8 COLLATE utf8_general_ci;</p>
</li>
</ol>
<h2>5数据插入、修改、删除</h2>
<ol>
<li>insert（replace）插入数据
<ol>
<li>插入一行完整数据
insert into 表名 valuses（值列表1、值列表）；</li>
<li>插入一行指定列数据
insert into 表名 （列名1，列名2）values（列值1、列值2）；</li>
</ol></li>
<li>insert（replace）插入多行数据
replace into 表名 values（第一行值），（第二行值）；</li>
<li>表2和表1表结构一样，将表2的数据复制到表1中。
insert into table 表1 select * from table 表2；</li>
<li>set插入一行数据
insert into 表名 set 列名1=列值1，列名2=列值2；</li>
<li>表记录的修改
update 表名 set 列名1=新列值1，列名2=新列值2 where条件；</li>
<li>表记录的删除
delete from 表名 where字句；</li>
</ol>
<h2>6TXT文件导入mysql</h2>
<ol>
<li>txt文件放入要导入的数据库文件中</li>
<li>txt字符集和数据库字符集，client，表，列的字符集一致。</li>
<li>show variables like '%secure%';
my.ini 文件中添加secure_file_priv=&quot;&quot;
+--------------------------+-------+
| Variable_name            | Value |
+--------------------------+-------+
| require_secure_transport | OFF   |
| secure_file_priv         |       |
+--------------------------+-------+</li>
<li>show global variables like 'local_infile';
set @@global.local_infile=1;或者set global local_infile=true;（临时改，重启服务器无效）
永久改：my.ini中添加：local_infile=1.
才允许导入CSV文件。</li>
<li>导入命令为
load data infile 'teacher.txt'  into table 表名;</li>
</ol>
<p>在Windows平台下，进入DOS窗口，输入：chcp ，可以得到操作系统的代码页信息，你可以从控制面板的语言选项中查看代码页对应的详细的字符集信息。</p>
<h2>7数据完整性</h2>
<ol>
<li>创建表时在列上创建主键（列级约束）
create table 表名（列名 数据类型 not null primary key，
列名1  数据类型）；</li>
<li>复合主键（表级约束）
primary key（列名1，列名2）；</li>
<li>删除表的主键
alter table 表名 drop primary key；</li>
<li>增加主键
alter table 表名 add primary key(列名)；</li>
<li>alter table 表名 add constraint 外键名
foreign key（列名） references 表名（列名）；</li>
<li>自定义约束（check）
alter table 表名 add constraint 约束名 check（列名&gt;值）；
删除：alter table 表名 drop check 约束名；</li>
<li>添加唯一性约束
alter table 表名 add unique（列名）；
alter table 表名 add constraint 唯一性约束名 unique(列名）；
删除：alter table 表名 列名；（删除表中的某列）</li>
<li>删除外键
ALTER TABLE 表名 DROP FOREIGN KEY 外键名；</li>
<li>创建外键
alter table score add constraint 外键名 foreign key
（列名） reference 另一表的表名（列名）；
数据类型一致，字符集一致，有索引，表中有数据必须满足外键否则无法添加。</li>
<li>删除唯一性约束
无名子：alter table 表名 drop index 列名；（该列为唯一性约束的名称）
有名字：alter table 表名 drop index 唯一性约束名；</li>
</ol>
<h2>8索引和视图</h2>
<ol>
<li>查看索引
show index from 表名；</li>
<li>创建索引
create index phone_index on student(phone asc);
create unique index cname_index on course(cname);
create index sc_index on score(studentno,courseno);</li>
<li>创建表时创建索引，前缀索引
create table if not exists teacher1(
teacherno char(6) not null comment'教师编号',
tname char(8) not null,
major char(10) not null,
prof char(10) not null,
department char(16) not null,
primary key(teacherno),
unique index tname_index(tname),
index dep_index(department(5))
);</li>
<li>给表添加索引
alter table teacher1 add index mark(tname,prof);</li>
<li>删除索引
drop index 索引名 on 表名；
alter table 表名 drop index 索引名；</li>
</ol>
<h2>9数据库的导入和导出</h2>
<p>导出：
DOS环境：
第一步：进bin目录
cmd
情况1、如果mysql安装在D盘
d:     //进入D盘
cd D:\Program Files\MySQL\MySQL Server 8.0\bin
情况2、如果mysql安装在C盘
cd  c:\Program Files\MySQL\MySQL Server 8.0\bin</p>
<p>第二步：
情况1；默认端口3306
mysqldump -u root -p 数据库名&gt;d:/mydata.sql   //将数据库名导出到D盘下的mydata.sql文件。
情况2：修改端口号为3307
mysqldump -h 127.0.0.1 -P3307 -u root -p 数据库名&gt;d:/mydata.sql //同上</p>
<p>第三步：
根据屏幕提示输入密码：123456
在D盘下，找到mydata.sql文件即为导出的库文件。</p>
<p>导入：
第一步
mysql环境：
创建数据库teaching
第二步
dos环境，进入bin目录，输入如下命令
mysql -u root -p teaching&lt;d:\mydata.sql;</p>
<p>第三步：
根据屏幕提示，输入密码：123456</p>
<p>第四步：
mysql环境下，use teaching，show tables     //验证数据库成功导入</p>
<h3>数据导入2022版</h3>
<ol>
<li>
<p>cmd 打开dos窗口</p>
</li>
<li>
<p>net start查看mysql服务是否打开     net start mysql80</p>
</li>
<li>
<p>mysql -u root -p --local-infile         mysql -u root -P 3307 -p --local-infile（如果安装mysql8时修改端口号，用此命令） 输入密码（mysql登录密码）</p>
</li>
<li>
<p>load  data  infile “teacher.txt” into table teacher;</p>
</li>
</ol>
<p>teacher.txt 只保存数据，不包括列名，各行文本需用tab分隔，每行最后也用tab分隔。</p>
<p>teacher.txt在teaching数据库文件夹中或者D:/ProgramData/MySQL/MySQL Server 8.0/Data</p>
<p>可以修改my.ini</p>
<p>D:\ProgramData\MySQL\MySQL Server 8.0找到my.ini文件，修改如下路径</p>
<p># Path to the database root</p>
<p>datadir=D:/ProgramData/MySQL/MySQL Server 8.0/Data</p>
<h3>　数据库表数据导出导入到文本文档</h3>
<p>第一步修改：my.ini
secure-file-priv=&quot;&quot;
另存为：编码格式ANSI。
第二步重启mysql服务：
右键单击我的电脑→管理→服务和应用程序</p>
<p>第三步数据导出到TXT</p>
<p>select * from book
into outfile 'd:/myfile1.txt'
fields terminated by ','
optionally enclosed by '&quot;'
lines terminated by '?';</p>
<p>第四步数据导入到mysql
load data infile 'd:/myfile2.txt'
into table book
fields terminated by ','
optionally enclosed by '&quot;'
lines terminated by '?';</p>
<h3>机房电脑文档数据导入mysql方法（两列的表格）</h3>
<ol>
<li>
<p>修改local_infile变量值（在mysql控制台）
show global variables like 'local_infile';
set global local_infile=true</p>
</li>
<li>
<p>修改my.ini配置文件（先把my.ini文件复制一份）
my.ini文件所在的位置：C:\ProgramData\MySQL\MySQL Server 8.0
修改内容如下：</p>
<p># Secure File Priv.</p>
<p># secure-file-priv=&quot;C:/ProgramData/MySQL/MySQL Server 8.0/Uploads&quot;
secure-file-priv=&quot;&quot;</p>
<p>另存为  ANSI</p>
</li>
<li>
<p>重启服务器：右键单击“计算机”→管理→服务和应用程序→服务→右键单击mysql80，重新启动</p>
</li>
<li>
<p>在mysql控制台：
use teaching;
select * from teach_course;查看表中是否有数据。</p>
<p>load data infile &quot;d:\teach_course.txt&quot; into table teach_course;
执行该命令前确认teach_course.txt文档在d盘下。</p>
<p>select * from teach_course;查看表中是否有数据。</p>
</li>
</ol>
<p>teach_course.txt文档内容如下：
数据间用tab间隔，用回车换行，保存为ANSI编码格式。
t05001  c05103
t05002  c05109
t05003  c05127
t05011  c05138
t05017  c06108
t06011  c06127
t06023  c05127
t07019  c08123
t08017  c08123
t08058  c08171
t05017  c06172
t06023  c06172</p>
<h2>数据库账号，登录，授权</h2>
<p>Mysql8.0root：
创建账号：create user lidan@localhost IDENTIFIED by '123456';
查看账号权限：show grants for 'lidan'@'localhost';
给账号授权：show grants for 'lidan'@'localhost';</p>
<p>DOS窗口用新账号登录：
进入mysql目录C:\Program Files\MySQL\MySQL Server 8.0\bin
用新账号登录 mysql -u lidan -p</p>
<hr />
<p>这是搬的老师的，都整理到这一个文件中了，原来是在很多个<code>.txt</code>文件中的，我真是受不了要狠狠吐槽了，那屎一样的排版，乱七八糟的序号，有些地方半拉可机莫名其妙的内容，我真是.....难蚌，我这里只简单的归一下序号调一下排版，没标序号的文件都放在了最后面的三级标题里面(最后一个账号操作还是二级标题)，不过 还是受不了，太屎了！</p>
