import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password, role } = body; // Extracting role from the request body

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    // Creating the user with the provided data including the role field
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
        role // Adding the role field to the user creation data
      }
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response("Failed to create user", { status: 500 });
  }
}
