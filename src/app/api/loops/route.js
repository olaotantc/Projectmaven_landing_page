export const runtime = "edge";
import { NextResponse } from 'next/server'
import { LoopsClient } from "loops";

const loops = new LoopsClient(process.env.LOOPS_API_KEY);

export async function POST(request) {
    const body = await request.json()
    const result = await loops.createContact(body.email);
    return NextResponse.json({ result}, { status: 200 })
}
