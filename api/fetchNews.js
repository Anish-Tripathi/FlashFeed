export default async function handler(req, res) {
  const query = req.query.query || "India";
  const apiKey = "668ceced1d5f424bb0f2c4c4805dfecc";

  // Make sure to use HTTPS!
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      return res.status(response.status).json({ error: "NewsAPI error" });
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
