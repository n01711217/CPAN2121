import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price'],
  },
}, { timestamps: true });

export default mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema);
