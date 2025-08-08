'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [tickets, setTickets] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchTickets = async () => {
    const res = await fetch('/api/tickets');
    const data = await res.json();
    setTickets(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const res = await fetch('/api/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, price: parseFloat(price) }),
      });

      if (res.ok) {
        setTitle('');
        setPrice('');
        setSuccessMessage('✅ Ticket submitted successfully!');
        fetchTickets(); // refresh list
        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        setErrorMessage('❌ Failed to submit ticket.');
      }
    } catch (err) {
      setErrorMessage('❌ Server error.');
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">🎟 Create a Ticket</h1>

        {successMessage && (
          <p className="text-green-600 font-medium mb-2">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-600 font-medium mb-2">{errorMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Ticket Title"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700">Price ($)</label>
            <input
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. 15.00"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit Ticket
          </button>
        </form>
      </div>

      <div className="mt-10 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">🎫 All Tickets</h2>
        {tickets.length === 0 ? (
          <p className="text-gray-500">No tickets found</p>
        ) : (
          <ul className="space-y-2">
            {tickets.map((ticket) => (
              <li
                key={ticket._id}
                className="bg-white px-4 py-2 shadow rounded-md text-gray-800"
              >
                {ticket.title} - ${ticket.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
