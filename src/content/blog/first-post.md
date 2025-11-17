---
title: 'Python发布自己的库'
description: '基于官方模板讲解如何准备 setup.py、实现模块并打包发布自研 Python 库。'
pubDate: '2020-11-12'
heroImage: '../../assets/blog-placeholder-3.jpg'
---


## **1.下载一个发布库的官方模板。**

链接：[https://github.com/navdeep-G/setup.py](https://link.zhihu.com/?target=https%3A//github.com/navdeep-G/setup.py)

直接clone到本地，解压。

![](https://pic1.zhimg.com/v2-c65af854b31fb314fd9a99503d57d136_1440w.png)

目录结构

1. 注意setup.py这个文件，是发布库的核心文件

![](https://pic2.zhimg.com/v2-3fcec4c690fca0d7c7cabb4713ac56ad_1440w.jpg)

setup.py

上面分别对应着**库的名称（QTool）**和描述，还有github的项目地址，个人邮箱，作者名称，支持的python环境版本信息和库的版本号

## 修改模块名称

![](https://pic1.zhimg.com/v2-a95804f15253a2ae9c438ebc6635024a_1440w.jpg)

修改模块的名称为qtool

注意上面我把mypackage修改为qtool了。QTool是库的名称，在pip install xxx的时候，xxx是库名。而在实际使用的时候，import xxx是模块的名称，也就是上面的qtool

## 在core.py中编写自己的代码

![](https://pic1.zhimg.com/v2-c899a6cc75db19aa031ac267a08cdb1e_1440w.jpg)

## 将库打包

```
python setup.py xxx 
```

其中xxx可以是下列几种方式中其中一个：

```
sdist create a  source distribution (tarball, zip file, etc.) 
bdist create a built  (binary) distribution 
bdist_dumb create a  "dumb" built distrib
```
