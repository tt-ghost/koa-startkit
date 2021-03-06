# koa-startkit

> koa脚手架工具，快速生成node + koa + mysql等功能的后台服务

## 核心依赖
```
node + koa2 + mysql + pm2
```

## 环境

- `mysql` 安装
```shell
# mac 电脑
brew install mysql -y
```

- `node`、`nvm`安装
  - node 下载地址 [https://nodejs.org/en/](https://nodejs.org/en/)
  - `nvm`(node版本管理工具) 安装 [https://github.com/creationix/nvm](https://github.com/creationix/nvm)


## 项目启动
 
1. 依赖安装 `npm i`
2. 启动数据库 `mysql.server start`
3. 登录数据库 `mysql -uroot -p` 输入密码进入
4. 创建数据库 `CREATE DATABASE koa_startkit;`
5. 启动方式
   - 本地启动 `npm start`
   - 测试环境启动 `npm run server-test`
   - 预发环境启动 `npm run server-stage`
   - 线上环境启动 `npm run server-prod`

- 日常运维，[pm2文档](https://github.com/creationix/nvm)

## 项目结构

```
.
├── app.js                // 入口文件
├── base                  // 基础class
│   ├── model.js
│   └── service.js
├── config                // 系统配置信息
│   ├── db.js
│   └── env.js
├── middlewares           // 中间件
│   ├── body-parser.js
│   ├── favicon.js
│   ├── index.js
│   ├── proxy-cdn.js
│   └── session.js
├── modules               // 业务模块，每个文件夹对应一个模块，含route\service\model
│   ├── index.js
│   ├── passport          // 登录业务模块
│   │   ├── index.js
│   │   ├── model.js
│   │   ├── service.js
│   │   └── sql.js
│   └── user              // 用户模块
│       ├── index.js
│       ├── model.js
│       ├── service.js
│       └── sql.js
├── sql                   // SQL文件，启动创建的表等
│   ├── db.sql
│   └── user.sql
└── util                  // 方法工具集
    ├── db.js
    ├── error.js
    ├── global.js
    ├── helper.js
    └── res.js
```