export default async function handler(req, res) {
  const backendUrl = 'https://facial-emotions-prediction.onrender.com';
  const frontendUrl = 'https://emotion-detector-frontend-mu.vercel.app';

  try {
    // Wake the backend
    await fetch(backendUrl);

    // Wait a few seconds to ensure it's awake
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Redirect to frontend
    res.writeHead(302, { Location: frontendUrl });
    res.end();
  } catch (err) {
    console.error('Wake failed:', err);
    res.status(500).send('Failed to wake backend');
  }
}
