## 前言

本项目全部采用[果儿岛](http://www.guoer.dao.com)提供的api，其中省略了支付宝付款这个功能，即不能替代原本官方商城进行商品支付。
使用了`angular1.5.8` 使用`bower`管理依赖。采用 `rem` 实现自适应。以及`css media query`控制实现响应式布局。部分页面使用`flex`布局。

## Demo

http://fruit.garychang.cn

<a href="http://fruit.garychang.cn" target="_Blank">新窗口打开</a>

### 使用

```

git clone

bower install

npm install

```
<!-- more -->

没有使用各种开发/测试插件，就 nginx 配合 livereload 插件。

## 项目结构

```
- controller
  - //所有的controller
- page
  - //route跳转的页面
- static
  - //静态文件
- template
  - //组件
- app.js
- index.html

```

### 主要页面

* 商品详情页面
* 地址管理页面
* 登陆页面
* 主页面
* 我的订单页面
* 用户中心页面
* 商店地址管理页面
* 购物车页面

### 组件

* 弹窗组件
* 轮播组件
* header组件
* 漂浮的购物车按钮组件

## 预览

![店铺地址](/images/fruitangular0.png)
![主页面](/images/fruitangular1.png)
![商品详情](/images/fruitangular2.png)
![登录页面](/images/fruitangular3.png)
![个人中心](/images/fruitangular4.png)
![订单管理](/images/fruitangular5.png)