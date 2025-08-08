import dbConnect from '@/lib/mongodb';
import Ticket from '@/models/Ticket';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const tickets = await Ticket.find();
      return res.status(200).json(tickets);
    } catch (err) {
      return res.status(500).json({ error: 'Failed to fetch tickets' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { title, price } = req.body;
      if (!title || !price) {
        return res.status(400).json({ error: 'Title and price are required' });
      }

      const newTicket = new Ticket({ title, price });
      await newTicket.save();

      return res.status(201).json(newTicket);
    } catch (err) {
      console.error('POST error:', err);
      return res.status(500).json({ error: 'Failed to create ticket' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
