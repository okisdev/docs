---
sidebar_position: 2
slug: /chat/deployment
title: Chat Chat Deployment
---

# Chat Chat Deployment

## Prerequisite

-   API keys from OpenAI, Azure, Claude, Cohere, Hugging Face, etc., any one will do

If you need the functionality of a dashboard, you will also need:

-   A Postgresql database

## Environment Variables

| variable name         | description                       | default                               | mandatory | prompt                                                                                                            |
| --------------------- | --------------------------------- | ------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------- |
| `BASE_URL`            | Your website URL (with prefix)    | Local default `http://localhost:3000` | **Yes**   |                                                                                                                   |
| `OPENAI_API_KEY`      | OpenAI API key                    |                                       | No        |                                                                                                                   |
| `OPENAI_API_ENDPOINT` | OpenAI API access point           |                                       | No        |                                                                                                                   |
| `DATABASE_URL`        | Postgresql database address       |                                       | **Yes**   | Start with `postgresql://` (if not required, please fill in `postgresql://user:password@example.com:port/dbname`) |
| `NEXTAUTH_URL`        | Your website URL (without prefix) |                                       | **Yes**   |                                                                                                                   |
| `NEXTAUTH_SECRET`     | NextAuth Secret                   |                                       | **Yes**   | Random hash (16 bits is best)                                                                                     |
| `EMAIL_HOST`          | SMTP Host                         |                                       | No        |                                                                                                                   |
| `EMAIL_PORT`          | SMTP Port                         |                                       | No        |                                                                                                                   |
| `EMAIL_USERNAME`      | SMTP username                     |                                       | No        |                                                                                                                   |
| `EMAIL_PASSWORD`      | SMTP password                     |                                       | No        |                                                                                                                   |
| `EMAIL_FORM`          | SMTP sending address              |                                       | No        |                                                                                                                   |

## Deployment

### Local Deployment

1. clone the Repo

    ```bash
    git clone https://github.com/okisdev/ChatChat.git
    ```

2. Installing dependencies

    ```bash
    cd ChatChat
    yarn
    ```

3. Create the `.env.local` file and fill in the environment variables

    ```bash
    cp .env.local.example .env.local
    ```

4. Run

    ```bash
    yarn dev
    ```

### Deploy to Vercel

1. Fork this repo
2. Create a new project on Vercel
3. add environment variables to the project settings
4. Deploy
