import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../src/utils/auth";

const prisma = new PrismaClient();

async function main() {

  //* Users *//
  const [admin, provider, client] = await Promise.all([
    prisma.user.create({
      data: {
        email: 'admin@booking.ao',
        name: 'Admin',
        password: hashPassword('admin_password'),
        role: 'ADMIN',
        identify: '005680207LA044'
      }
    }),
    prisma.user.create({
      data: {
        email: 'provider@booking.ao',
        name: 'Carlos Manuel',
        identify: "5459988776",
        password: hashPassword('provider_password'),
        role: 'PROVIDER',
        wallet: {
          create: {
            balance: '50000',
          }
        },
        services: {
          create: {
            name: "Web Design",
            price: "25000",
            description: "Web Design"
          }
        }
      },
    }),
    prisma.user.create({
      data: {
        email: 'dedal@booking.ao',
        name: 'Dedaldino Daniel',
        identify: "5412345678",
        password: hashPassword('client_password'),
        role: 'CLIENT',
        wallet: {
          create: {
            balance: '30000',
          }
        }
      },
    })
  ])

  console.log(admin, provider, client);
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
