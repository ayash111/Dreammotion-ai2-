export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Use POST for video requests." });
  }
  const { prompt, aspectRatio, duration, quality } = req.body || {};
  if (typeof prompt !== "string" || prompt.trim().length < 8) {
    return res.status(400).json({ message: "Please enter a longer video prompt." });
  }
  return res.status(501).json({
    message: "DreamMotion AI is ready, but no video model is connected yet.",
    received: { prompt: prompt.trim(), aspectRatio, duration, quality }
  });
}
