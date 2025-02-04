---
title: GitHub 貢獻 API 參考
description: GitHub 貢獻 API 參考
---

## 這是什麼

okisdev GitHub 貢獻 API

## 端點

### 基礎 URL

`https://api.harrly.com`

### `GET /api/github/contribution`

okisdev GitHub 貢獻

## 查詢參數

| 參數       | 類型   | 必需 | 描述                       |
| ---------- | ------ | ---- | -------------------------- |
| `username` | string | 是   | 要獲取貢獻的 GitHub 用戶名 |
| `year`     | string | 是   | 要獲取貢獻的年份           |

## 響應

### 成功響應

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

### 錯誤響應

如果未提供必需的查詢參數，API 將返回 HTTP 400 Bad Request 響應和錯誤信息。

```json
{
  "error": "未提供用戶名和年份。"
}
```

如果在獲取貢獻時出現錯誤，API 將返回 HTTP 500 Internal Server Error 響應。
