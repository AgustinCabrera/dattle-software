import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  try {
    const animals = await prisma.animal.findMany()
    return NextResponse.json(animals)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch animals' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const animal = await prisma.animal.create({
      data: {
        tag: body.tag,
        name: body.name,
        breed: body.breed,
        birthDate: new Date(body.birthDate),
        gender: body.gender,
      },
    })
    return NextResponse.json(animal, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create animal' }, { status: 500 })
  }
}

