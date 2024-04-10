/*
  Warnings:

  - You are about to drop the `Apartment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Apartment" DROP CONSTRAINT "Apartment_userId_fkey";

-- DropTable
DROP TABLE "Apartment";

-- CreateTable
CREATE TABLE "apartments" (
    "id" SERIAL NOT NULL,
    "room" INTEGER NOT NULL,
    "bathRoom" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "apartments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "apartments" ADD CONSTRAINT "apartments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
