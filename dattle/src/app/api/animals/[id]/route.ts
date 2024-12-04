import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const animal = await prisma.animal.findUnique({
      where: { id: params.id },
      include: { events: true },
    })
    if (!animal) {
      return NextResponse.json({ error: 'Animal not found' }, { status: 404 })
    }
    return NextResponse.json(animal)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch animal' }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const animal = await prisma.animal.update({
      where: { id: params.id },
      data: {
        tag: body.tag,
        name: body.name,
        breed: body.breed,
        birthDate: new Date(body.birthDate),
        gender: body.gender,
      },
    })
    return NextResponse.json(animal)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update animal' }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.animal.delete({
      where: { id: params.id },
    })
    return NextResponse.json({ message: 'Animal deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete animal' }, { status: 500 })
  }
}

