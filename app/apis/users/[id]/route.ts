import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { userSchema } from '../route';

const prisma = new PrismaClient();


export async function GET(request: NextRequest, {params} : {params: {id: string}}) {
  // const { id } = request.query;

  // if (!params.id) {
  //   return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  // }

  const user = await prisma.user.findUnique({
    where: { id: Number(params.id) },
  });

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  return NextResponse.json(user, { status: 200 });
}

export async function PUT(request: NextRequest, {params} : {params: {id: string}}) {
  // const { id } = request.query;
  const body = await request.json();
  const validation = userSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const updatedUser = await prisma.user.update({
    where: { id: Number(params.id) },
    data: {
      name: body.name,
      phoneNumber: body.phoneNumber,
      password: body.password,
      image_url: body.image_url || '',
      permis: body.permis || '',
      identity: body.identity || '',
    },
  });

  return NextResponse.json(updatedUser, { status: 200 });
}

export async function DELETE(request: NextRequest, {params} : {params: {id: string}}) {
  // const { id } = request.query;

  // if (!params.id) {
  //   return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  // }

  await prisma.user.delete({
    where: { id: Number(params.id) },
  });

  return NextResponse.json({ message: 'User deleted successfully' }, { status: 200 });
}
