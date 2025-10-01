# Render_wake
## Wake-and-Redirect Function Deployment Guide
This guide walks you through deploying a serverless function on Vercel that wakes a backend service and redirects to a frontend.

### 📁 1. Project Structure
Create a folder named wake-redirect with the following structure:

```
wake-redirect/
├── api/
│   └── wake.js
├── package.json
```
### 🧠 2. `api/wake.js`

Paste the following code:

```
export default async function handler(req, res) {
  const backendUrl = 'https://facial-emotions-prediction.onrender.com';
  const frontendUrl = 'https://emotion-detector-frontend-mu.vercel.app';

  try {
    await fetch(backendUrl); // Wake backend
    await new Promise(resolve => setTimeout(resolve, 3000)); // Wait
    res.writeHead(302, { Location: frontendUrl }); // Redirect
    res.end();
  } catch (err) {
    console.error('Wake failed:', err);
    res.status(500).send('Failed to wake backend');
  }
}
```
### 📦 3. package.json
Use this minimal config:

```
{
  "name": "wake-redirect",
  "version": "1.0.0",
  "type": "module"
}
```
No build scripts or dependencies needed.

### 🧹 4. Clean Up
✅ Delete any vercel.json file.

✅ Ensure no public/ folder exists.

✅ Confirm you're inside the wake-redirect folder.

### 🧪 5. Test Locally (Optional)
```
vercel dev
Visit: http://localhost:3000/api/wake
```
### 🚀 6. Deploy to Production
```
vercel --prod
```
You’ll get a live URL like:

Code
https://wake-redirect.vercel.app/api/wake