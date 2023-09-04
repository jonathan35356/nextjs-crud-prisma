import { NextResponse } from "next/server";

export function GET(request, { params }) {
  return NextResponse.json("Obteniendo Tarea " + params.id);
}

export function PUT(request, { params }) {
  return NextResponse.json("Actualizando Tarea " + params.id);
}

export function DELETE(reuqest, { params }) {
  return NextResponse.json("Eliminando Tarea " + params.id);
}
