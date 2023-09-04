import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  //prisma y usa el comnado de findmany para que los devuelva todos
  const tasks = await prisma.task.findMany();
  console.log(tasks);
  return NextResponse.json(tasks);
}

//para crear algo se deba adquirir los datos por parametros y se requieren usando request
export async function POST(request) {
  //Se tiene que pasar a formato json para poder guardarlo
  const data = await request.json();
  console.log(data);
  return NextResponse.json("creando tareas");
}
