# MERN Portfolio (Modern UI)

A full-stack portfolio starter built with the **MERN stack**:
- **MongoDB** for data storage
- **Express + Node.js** for APIs
- **React (Vite)** for a modern, fast frontend

## Project Structure

```
.
├── client/                 # React + Vite frontend
├── server/                 # Express + MongoDB backend
├── docs/
│   └── CLIENT_INFO_REQUEST.md
└── README.md
```

## Quick Start

### 1) Install dependencies

```bash
npm install
npm install --prefix client
npm install --prefix server
```

### 2) Configure environment variables

Copy `server/.env.example` to `server/.env` and fill values.

### 3) Run backend

```bash
npm run dev --prefix server
```

### 4) Run frontend

```bash
npm run dev --prefix client
```

## API Endpoints

- `GET /api/portfolio` → fetch portfolio data
- `PUT /api/portfolio` → update portfolio data (currently no auth; add before production)


## VS Code Step-by-Step Guide

For a detailed implementation walkthrough in VS Code, follow:

- `docs/VS_CODE_STEP_BY_STEP.md`

## What I need from you

Please share the requested content listed in:

- `docs/CLIENT_INFO_REQUEST.md`

Once you provide that information, I can fully personalize this portfolio with your real content and branding.

## Pull Request Workflow

1. Create a feature branch from `main`.
2. Make your code changes.
3. Run local checks:
   - `npm run dev --prefix server`
   - `npm run dev --prefix client`
   - `npm run build --prefix client`
4. Open a PR using `.github/pull_request_template.md`.

