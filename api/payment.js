export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { action, paymentId, txid } = req.query;
  const apiKey = process.env.PI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'API key not set' });

  try {
    if (action === 'approve') {
      const r = await fetch(
        `https://api.minepi.com/v2/payments/${paymentId}/approve`,
        { method: 'POST', headers: { Authorization: `Key ${apiKey}` } }
      );
      return res.status(200).json(await r.json());
    }
    if (action === 'complete') {
      const r = await fetch(
        `https://api.minepi.com/v2/payments/${paymentId}/complete`,
        {
          method: 'POST',
          headers: { Authorization: `Key ${apiKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ txid })
        }
      );
      return res.status(200).json(await r.json());
    }
    return res.status(400).json({ error: 'Invalid action' });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
