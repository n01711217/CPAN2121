import dbConnect from '@/lib/mongodb';
import Ticket from '@/models/Ticket';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await dbConnect();
    const tickets = await Ticket.find();
    return NextResponse.json(tickets);
  } catch (error) {
    return NextResponse.json(
      { message: 'Error getting tickets', error },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const { title, description } = await req.json();
    await dbConnect();
    await Ticket.create({ title, description });
    return NextResponse.json({ message: 'Ticket created' }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error creating ticket', error },
      { status: 500 }
    );
  }
}
