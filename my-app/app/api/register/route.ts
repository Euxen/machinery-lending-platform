import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Request body:", body);
    const { email, name, password } = body;

    const hashedPassword = await bcrypt.hash(password, 12);

    console.log("Hashed password:", hashedPassword);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });
    console.log("User created:", user);

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
