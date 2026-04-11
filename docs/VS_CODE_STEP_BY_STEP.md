# Implement This MERN Portfolio in VS Code (Step-by-Step)

This guide shows exactly how to run and customize this project in **Visual Studio Code**.

## 0) Prerequisites
Install these first:
- **Node.js LTS** (includes npm)
- **MongoDB Community Server** (local), or a **MongoDB Atlas** connection string
- **VS Code**

Optional VS Code extensions:
- ESLint
- Prettier
- DotENV

## 1) Open the project in VS Code
1. Open VS Code.
2. Click **File → Open Folder...**
3. Select the project folder (`test` or your cloned repo folder).
4. Open VS Code terminal: **Terminal → New Terminal**.

## 2) Install dependencies
Run in the root terminal:

```bash
npm install
```

If your environment blocks workspaces, install manually:

```bash
npm install --prefix client
npm install --prefix server
```

## 3) Configure backend environment variables
1. In VS Code Explorer, open `server/.env.example`.
2. Create a new file `server/.env`.
3. Copy values and update as needed:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/portfolio
```

If using MongoDB Atlas, replace `MONGO_URI` with your Atlas URI.

## 4) Run MongoDB
- **Local MongoDB**: start your MongoDB service.
- **Atlas**: no local service needed.

Quick check (optional):
```bash
mongosh
```
If shell opens, MongoDB is reachable.

## 5) Start backend server
In terminal 1:

```bash
npm run dev --prefix server
```

Expected log:
- `Server listening on http://localhost:5000`

Health check in browser:
- `http://localhost:5000/health`

## 6) Start frontend app
In terminal 2:

```bash
npm run dev --prefix client
```

Open browser at:
- `http://localhost:5173`

## 7) Personalize portfolio content
Update frontend placeholders in:
- `client/src/App.jsx`
- `client/src/styles.css`

Recommended order:
1. Replace name/title/hero summary
2. Replace project cards with your real projects
3. Update skills
4. Update footer/contact links
5. Tune colors/fonts/spacing

## 8) Connect frontend to backend data (next step)
Current UI is static starter data. To fetch real backend data:
1. Add a `useEffect` in `client/src/App.jsx`
2. Fetch `GET http://localhost:5000/api/portfolio`
3. Render response values instead of local sample array

To update data from admin form or script:
- Send `PUT http://localhost:5000/api/portfolio` with JSON body.

## 9) Fill required documents/information
Use this checklist and provide your real data:
- `docs/CLIENT_INFO_REQUEST.md`

## 10) Build for production
```bash
npm run build --prefix client
```

Preview build locally:
```bash
npm run preview --prefix client
```

## 11) Common issues
### `npm install` fails with 403/registry error
Your network or policy blocks npm registry access.
- Try another network
- Check corporate proxy
- Configure npm registry/proxy

### Backend exits with MongoDB connection failed
- Ensure MongoDB is running
- Verify `MONGO_URI` in `server/.env`

### Port already in use
- Change `PORT` in `server/.env`
- Or stop process using that port

## 12) Suggested next improvements
- Add authentication for `PUT /api/portfolio`
- Add admin dashboard for editing projects
- Add form validation and toast notifications
- Add deployment (Vercel for client + Render/Railway for server)
