---
title: GitHub 贡献 API 参考
description: GitHub 贡献 API 参考
---

## 这是什么

okisdev GitHub 贡献 API

## 端点

### 基础 URL

`https://api.harrly.com`

### `GET /api/github/contribution`

okisdev GitHub 贡献

## 查询参数

| 参数       | 类型   | 必需 | 描述                       |
| ---------- | ------ | ---- | -------------------------- |
| `username` | string | 是   | 要获取贡献的 GitHub 用户名 |
| `year`     | string | 是   | 要获取贡献的年份           |

## 响应

### 成功响应

```json
{
    "username": "example",
    "year": "2022",
    "min": 0,
    "max": 10,
    "contributions": [
        {
            "week": 0,
            "days": [
                {
                    "date": "2022-01-01",
                    "count": 0
                },
                {
                    "date": "2022-01-02",
                    "count": 2
                },
                ...
            ]
        },
        ...
    ]
}
```

### 错误响应

如果未提供必需的查询参数，API 将返回 HTTP 400 Bad Request 响应和错误信息。

```json
{
  "error": "未提供用户名和年份。"
}
```

如果在获取贡献时出现错误，API 将返回 HTTP 500 Internal Server Error 响应。
