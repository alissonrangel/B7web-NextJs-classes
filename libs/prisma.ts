import { PrismaClient } from "@prisma/client";

// para ter apenas uma conexão em modo de desenvolvimento
declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma; 
}

export default prisma;