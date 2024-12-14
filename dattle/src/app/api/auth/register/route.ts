import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient({});
export async function POST (req: NextResponse){
  const data = await req.json();
  console.log(data);
  const newUser = await prisma.user.create({data});
  return new NextResponse(JSON.stringify(newUser), { status: 201 });
}