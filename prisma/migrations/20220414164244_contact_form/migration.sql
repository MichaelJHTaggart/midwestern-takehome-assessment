-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" VARCHAR(500) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
