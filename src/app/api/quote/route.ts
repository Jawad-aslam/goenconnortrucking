import { NextResponse } from "next/server";
import { db } from "@/db";
import { quoteRequests } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, mcNumber, equipmentType, trucks, message } =
      body ?? {};

    if (!name || !email || !phone || !equipmentType) {
      return NextResponse.json(
        { error: "Name, email, phone and equipment type are required." },
        { status: 400 },
      );
    }

    const [created] = await db
      .insert(quoteRequests)
      .values({
        name: String(name).slice(0, 160),
        email: String(email).slice(0, 200),
        phone: String(phone).slice(0, 60),
        company: company ? String(company).slice(0, 200) : null,
        mcNumber: mcNumber ? String(mcNumber).slice(0, 60) : null,
        equipmentType: String(equipmentType).slice(0, 80),
        trucks: trucks ? String(trucks).slice(0, 40) : null,
        message: message ? String(message) : null,
      })
      .returning();

    return NextResponse.json({ ok: true, id: created.id });
  } catch (err) {
    console.error("quote submission failed", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const rows = await db
      .select()
      .from(quoteRequests)
      .orderBy(desc(quoteRequests.createdAt))
      .limit(50);
    return NextResponse.json({ requests: rows });
  } catch (err) {
    console.error("quote fetch failed", err);
    return NextResponse.json({ error: "Failed to load requests." }, { status: 500 });
  }
}
