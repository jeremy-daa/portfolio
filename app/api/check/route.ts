import { NextResponse } from "next/server";

export async function POST(request: Request) {
  return NextResponse.json({
    status: 400,
    message: "Please enter title",
  });
}
