---
title: GitHub Contribution API Reference
description: GitHub Contribution API Reference
---

## What is this

okisdev GitHub Contribution API

## Endpoint

### Base URL

`https://api.harrly.com`

### `GET /api/github/contribution`

okisdev GitHub Contribution

## Query Parameters

| Parameter  | Type   | Required | Description                                                |
| ---------- | ------ | -------- | ---------------------------------------------------------- |
| `username` | string | Yes      | The GitHub username of the user whose contributions to get |
| `year`     | string | Yes      | The year for which to get the contributions                |

## Response

### Success Response

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

### Error Response

If the required query parameters are not provided, the API will return an HTTP 400 Bad Request response with an error message.

```json
{
  "error": "No username and year provided."
}
```

If there is an error while retrieving the contributions, the API will return an HTTP 500 Internal Server Error response.
