# Passmark Toolkit R

## 作用

1. 通过产品名称过滤
2. 给产品名称上色（
  <span style='color: #0068B5;'>Intel</span>，
  <span style='color: #EF281F;'>AMD</span>，
  <span style='color: #76B900;'>Nvidia</span>
）
3. 显示产品中文名

## 直接安装

* [GitHub](https://github.com/Arathi/passmark-toolkit-r/raw/master/dist/passmark-toolkit-r.user.js)
* [ghproxy](https://mirror.ghproxy.com/https://github.com/Arathi/passmark-toolkit-r/raw/master/dist/passmark-toolkit-r.user.js)
* [jsDelivr](https://cdn.jsdelivr.net/gh/Arathi/passmark-toolkit-r/dist/passmark-toolkit-r.user.js)

## 编译安装

编译需要先准备好相关的环境，比如`git`、`node`、`pnpm`。

既然阁下已经看到这一节，那么这里就大胆假设环境都安装好了。

1. 下载源码

```bash
git clone https://github.com/Arathi/passmark-toolkit-r.git
cd passmark-toolkit-r
```

2. 安装依赖

```bash
pnpm install
```

3. 编译安装

```bash
pnpm build && pnpm preview
```
