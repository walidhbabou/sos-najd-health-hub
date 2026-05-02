import { NextResponse } from 'next/server';

const demoAppointments = [
  { id: 'a1', patient: 'Alice', doctor: 'Dr. Bob', startAt: new Date().toISOString(), status: 'PENDING' },
];

export async function GET() {
  return NextResponse.json({ data: demoAppointments });
}

export async function POST(req: Request) {
  const body = await req.json();
  // In a full app this would persist via Prisma. Here we echo back the payload.
  return NextResponse.json({ created: body }, { status: 201 });
}
