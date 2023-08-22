import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

export async function GET() {
  const randomName = faker.person.fullName();
  const randomEmail = faker.internet.email();

  return NextResponse.json({ randomName, randomEmail });
}
