export default async function handler(req, res) {
  const backendUrl = 'https://facial-emotions-prediction.onrender.com'; // Replace with your backend URL
  const frontendUrl = 'https://emotion-detector-frontend-mu.vercel.app'; // Replace with your frontend URL

  try {
    await fetch(backendUrl); // Wake backend
    await new Promise(resolve => setTimeout(resolve, 3000)); // Wait 3 seconds
    res.writeHead(302, { Location: frontendUrl }); // Redirect
    res.end();
  } catch (err) {
    console.error('Wake failed:', err);
    res.status(500).send('Failed to wake backend');
  }
}
