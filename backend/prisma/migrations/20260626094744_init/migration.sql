-- CreateTable
CREATE TABLE "Do" (
    "id" SERIAL NOT NULL,
    "doNumber" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Do_pkey" PRIMARY KEY ("id")
);


