// api/chat.js
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://solvire.in', 
        'X-Title': 'Solvire AI'
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3-8b-instruct:free',
        messages: [
          {
            role: 'system',
            content: `You are Solvire AI, the official customer support assistant for Solvire (https://www.solvire.in/).
            
            COMPANY INFORMATION:
            - Name: Solvire
            - Location: Patna, Bihar 800020
            - Contact:  | Email: solvire.in@gmail.com

            SERVICES PROVIDED:
            - Residential: Residential Solar Installation, On-Grid Solar System, Off-Grid Solar System, Solar Water Heater Support, Net Metering Assistance.
            - Commercial: Commercial Solar Installation, Solar Street Light Installation, Annual Maintenance Contract (AMC), Financing / EMI Assistance, Customized Solar Design.
            - Industrial: Industrial Solar Solutions, High Capacity Hybrid Systems, Site Survey & Energy Audit, System Repair & Upgradation, Subsidy & Documentation Support.

            CORE RULES:
            1. Answer customer questions ONLY based on the provided company information above.
            2. If a customer asks something not covered here, politely direct them to our official contact channels.
            3. Never invent policies, prices, locations, or services.`
          },
          ...messages
        ]
      })
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
