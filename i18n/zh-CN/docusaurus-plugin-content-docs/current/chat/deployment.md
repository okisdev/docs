---
sidebar_position: 2
slug: /chat/deployment
title: Chat Chat 部署
---

# Chat Chat 部署

:::info
如果你需要数据库功能并允许用户注册，请确保

1. 你的数据库是由 Postgresql 提供的。

2. 你的数据库确实有存储用户信息的表，初次部署需要运行 `npx prisma db push` 以投射数据库结构。

3. 你的数据库可以从互联网上访问。

:::

## 前提条件

-   来自 OpenAI, Azure, Claude, Cohere, Hugging Face 等的 API 密钥，任意一个即可

如果你需要仪表盘的功能，你还需要：

-   Postgresql 数据库（Vercel Storage, Supabase 或者其他平台的 postgresql 都可以）

## 环境变量

| 变量名称              | 描述                  | 默认 | 是否强制需要 | 提示                                                                                                |
| --------------------- | --------------------- | ---- | ------------ | --------------------------------------------------------------------------------------------------- |
| `DATABASE_URL`        | Postgresql 数据库地址 |      | **Yes**      | 以 `postgresql://` 开头 （如果不需要，请填写 `postgresql://user:password@example.com:port/dbname`） |
| `NEXTAUTH_URL`        | 您的网站 URL          |      | **Yes**      | （带前缀）                                                                                          |
| `NEXTAUTH_SECRET`     | NextAuth Secret       |      | **Yes**      | 随机哈希数值（16 位最佳）                                                                           |
| `OPENAI_API_KEY`      | OpenAI API 密钥       |      | No           |                                                                                                     |
| `OPENAI_API_ENDPOINT` | OpenAI API 接入点     |      | No           |                                                                                                     |
| `EMAIL_HOST`          | SMTP Host             |      | No           |                                                                                                     |
| `EMAIL_PORT`          | SMTP Port             |      | No           |                                                                                                     |
| `EMAIL_USERNAME`      | SMTP username         |      | No           |                                                                                                     |
| `EMAIL_PASSWORD`      | SMTP password         |      | No           |                                                                                                     |
| `EMAIL_FORM`          | SMTP 发送地址         |      | No           |                                                                                                     |

## 部署

### 本地部署

1. git clone 本仓库

    ```bash
    git clone https://github.com/okisdev/ChatChat.git
    ```

2. 安装依赖

    ```bash
    cd ChatChat
    yarn
    ```

3. 创建 `.env.local` 文件并填写环境变量

    ```bash
    cp .env.local.example .env.local
    ```

4. 运行

    ```bash
    yarn dev
    ```

### 部署到 Zeabur

访问 [Zeabur](https://zeabur.com) 来部署

### 部署到 Railway

[![部署到 Railway](https://railway.app/button.svg)](https://railway.app/template/-WWW5r)

### 部署到 Vercel

[![Deployed in Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/okisdev/ChatChat)

或者

1.  Fork 本仓库
2.  在 Vercel 上创建一个新项目
    ![](./assets/Vercel-1.png)
3.  在项目设置中添加环境变量（以下是强制要求的）
    ![](./assets/Vercel-2.png)
4.  部署

### 使用 Docker 部署

1. 克隆 Repo

    ```bash
    git clone https://github.com/okisdev/ChatChat.git
    ```

2. 运行以下命令来构建镜像

    ```bash
    docker build -t chatchat .
    docker run -p 3000:3000 chatchat -e DATABASE_URL="" -e NEXTAUTH_URL="" -e NEXTAUTH_SECRET="" -e OPENAI_API_KEY="" -e OPENAI_API_ENDPOINT="" -e EMAIL_HOST="" -e EMAIL_PORT="" -e EMAIL_USERNAME="" -e EMAIL_PASSWORD="" -e EMAIL_FORM=""
    ```

或者使用 Docker Hub 上的镜像

```bash
docker run -p 3000:3000 -e DATABASE_URL="" -e NEXTAUTH_URL="" -e NEXTAUTH_SECRET="" -e OPENAI_API_KEY="" -e OPENAI_API_ENDPOINT="" -e EMAIL_HOST="" -e EMAIL_PORT="" -e EMAIL_USERNAME="" -e EMAIL_PASSWORD="" -e EMAIL_FORM="" ghcr.io/okisdev/chatchat:latest
```
