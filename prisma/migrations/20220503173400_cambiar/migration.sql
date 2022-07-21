/*
  Warnings:

  - You are about to drop the column `softwarecomputerId` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `license_so` on the `SoftwareComputer` table. All the data in the column will be lost.
  - You are about to drop the `PartComputer` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[internal_code]` on the table `Location` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[productId]` on the table `Location` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[computerId]` on the table `Location` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `computerId` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `internal_code` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `computerId` to the `Maintenance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `Maintenance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `computerId` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `license_soA` to the `SoftwareComputer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PartComputer" DROP CONSTRAINT "PartComputer_computerId_fkey";

-- DropForeignKey
ALTER TABLE "PartComputer" DROP CONSTRAINT "PartComputer_locationId_fkey";

-- DropForeignKey
ALTER TABLE "PartComputer" DROP CONSTRAINT "PartComputer_maintenanceId_fkey";

-- DropForeignKey
ALTER TABLE "PartComputer" DROP CONSTRAINT "PartComputer_productId_fkey";

-- DropForeignKey
ALTER TABLE "Program" DROP CONSTRAINT "Program_softwarecomputerId_fkey";

-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "computerId" INTEGER NOT NULL,
ADD COLUMN     "internal_code" INTEGER NOT NULL,
ADD COLUMN     "productId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Maintenance" ADD COLUMN     "computerId" INTEGER NOT NULL,
ADD COLUMN     "productId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Program" DROP COLUMN "softwarecomputerId",
ADD COLUMN     "computerId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SoftwareComputer" DROP COLUMN "license_so",
ADD COLUMN     "license_soA" TEXT NOT NULL;

-- DropTable
DROP TABLE "PartComputer";

-- CreateIndex
CREATE UNIQUE INDEX "Location_internal_code_key" ON "Location"("internal_code");

-- CreateIndex
CREATE UNIQUE INDEX "Location_productId_key" ON "Location"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "Location_computerId_key" ON "Location"("computerId");

-- AddForeignKey
ALTER TABLE "Program" ADD CONSTRAINT "Program_computerId_fkey" FOREIGN KEY ("computerId") REFERENCES "Computer"("id_computer") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id_product") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_computerId_fkey" FOREIGN KEY ("computerId") REFERENCES "Computer"("id_computer") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Maintenance" ADD CONSTRAINT "Maintenance_computerId_fkey" FOREIGN KEY ("computerId") REFERENCES "Computer"("id_computer") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Maintenance" ADD CONSTRAINT "Maintenance_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id_product") ON DELETE RESTRICT ON UPDATE CASCADE;
