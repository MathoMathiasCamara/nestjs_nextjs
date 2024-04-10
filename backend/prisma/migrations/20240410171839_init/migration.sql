-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "hash" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Apartment" (
    "id" SERIAL NOT NULL,
    "room" INTEGER NOT NULL,
    "bathRoom" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Apartment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- AddForeignKey
ALTER TABLE "Apartment" ADD CONSTRAINT "Apartment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
