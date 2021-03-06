This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# https://midwestern-takehome-assessment.vercel.app/

## Explanation
This project follows the challenge for 1 & 3 outlined in the following repository: https://github.com/Midwestern-Interactive/tech-challenge

## Getting Started

If you want to pull the code locally on your machine:
Please insert your own .env files || database connection strings.
Mine are exposed as they prisma is having an issue reading environment variables.

The .env file will need 2 heroku databases(cloud), OR a database that has permissions for creating a new database.

First, install local dependencies:
```
npm install
```

To seed prisma, run migration, and view your database interaction run these commands in order 
```bash

npx prisma db seed

npx prisma migrate dev

npx prisma studio

```

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## First Nextjs project ever
To start this project I first familiarized myself with the [official Nextjs tutorial](https://nextjs.org/learn/foundations/about-nextjs)

## First Prisma.io project ever
Implementing Prisma was an absolute joy. Super easy, and was able to follow their docs to do exactly what I wanted to accomplish.

[Prisma](https://www.prisma.io/docs/getting-started)

### Challenges
- Completely learn Nextjs
- Completely learn Prisma
- Completely learn Formik
- Relearn CSS grid

### Throughput
Day of receiving the project: March 25, 2022
Day of completion: April 15, 2022

I worked on the project primarily Mon-Fri between the hours of 8am and 12pm MDT (I estimate roughly 10-15 hours a week). 

I believe the estimated total time on this project took about 20-30 hours of labor.
