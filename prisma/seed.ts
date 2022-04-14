import { PrismaClient, Hero, Heading } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
 const talkie = await prisma.hero.upsert({
   create: {
     image: '/images/talkie.svg',
     height: 106,
     width: 51,
     title: 'Heading Two',
     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
     buttonText: 'Learn More',
    },
  })
  const bunny = await prisma.hero.upsert({
   create: {
    image: '/images/rabbit.svg',
    height: 97,
    width: 622,
    title: 'Heading Two',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    buttonText: 'Learn More',
   },
  })
  const coin = await prisma.hero.upsert({
   create: {
    image: '/images/coin.svg',
    height: 98,
    width: 98,
    title: 'Heading Two',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    buttonText: 'Learn More',
   },
 })
  const headingOneLeo = await prisma.heading.upsert({
    create: {
      title: 'Heading One',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      dos eiusmod tempor incididunt ut labore et trace dolore magna
      aliqua.
      <br />
      <br />
      Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu
      dictum varius duis at consectetur lorem.`,
    },
  })
 //  const headingOneOther = await prisma.user.upsert({
 //   create: {
 //     title: 'Heading One',
 //     text: 'Bob',
 //   },
 // })
  console.log({ talkie, bunny, coin, headingOneLeo })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })