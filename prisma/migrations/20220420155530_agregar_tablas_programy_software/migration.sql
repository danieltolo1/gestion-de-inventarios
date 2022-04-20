/*
  Warnings:

  - A unique constraint covering the columns `[softwarecomputerId]` on the table `Computer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `historial` to the `Computer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `observation` to the `Computer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `softwarecomputerId` to the `Computer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `historial` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Enum_Operatigsystem" AS ENUM ('Windows_7', 'Windows_8', 'Windows_10', 'Windows_11');

-- CreateEnum
CREATE TYPE "Enum_Architecture" AS ENUM ('bits_32', 'bits_64');

-- AlterTable
ALTER TABLE "Computer" ADD COLUMN     "historial" TEXT NOT NULL,
ADD COLUMN     "observation" TEXT NOT NULL,
ADD COLUMN     "softwarecomputerId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "historial" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "SoftwareComputer" (
    "id_softwarecomputer" SERIAL NOT NULL,
    "operatingsystem" "Enum_Operatigsystem" NOT NULL,
    "license_so" TEXT NOT NULL,
    "user_anydesk" TEXT NOT NULL,
    "pass_anydesk" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "user_domain" TEXT NOT NULL,
    "pass_domain" TEXT NOT NULL,
    "user_admin" TEXT NOT NULL,
    "pass_admin" TEXT NOT NULL,
    "user_local" TEXT NOT NULL,
    "pass_local" TEXT NOT NULL,
    "architecture" "Enum_Architecture" NOT NULL,

    CONSTRAINT "SoftwareComputer_pkey" PRIMARY KEY ("id_softwarecomputer")
);

-- CreateTable
CREATE TABLE "Program" (
    "id_program" SERIAL NOT NULL,
    "name_program" TEXT NOT NULL,
    "version_program" TEXT NOT NULL,
    "license_program" TEXT NOT NULL,
    "softwarecomputerId" INTEGER NOT NULL,

    CONSTRAINT "Program_pkey" PRIMARY KEY ("id_program")
);

-- CreateIndex
CREATE UNIQUE INDEX "Program_softwarecomputerId_key" ON "Program"("softwarecomputerId");

-- CreateIndex
CREATE UNIQUE INDEX "Computer_softwarecomputerId_key" ON "Computer"("softwarecomputerId");

-- AddForeignKey
ALTER TABLE "Computer" ADD CONSTRAINT "Computer_softwarecomputerId_fkey" FOREIGN KEY ("softwarecomputerId") REFERENCES "SoftwareComputer"("id_softwarecomputer") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Program" ADD CONSTRAINT "Program_softwarecomputerId_fkey" FOREIGN KEY ("softwarecomputerId") REFERENCES "SoftwareComputer"("id_softwarecomputer") ON DELETE RESTRICT ON UPDATE CASCADE;
