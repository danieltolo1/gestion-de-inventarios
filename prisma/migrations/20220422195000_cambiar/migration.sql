/*
  Warnings:

  - A unique constraint covering the columns `[internal_code]` on the table `Computer` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Computer_softwarecomputerId_key";

-- DropIndex
DROP INDEX "Computer_stateId_key";

-- DropIndex
DROP INDEX "Maintenance_userId_key";

-- DropIndex
DROP INDEX "PartComputer_computerId_key";

-- DropIndex
DROP INDEX "PartComputer_locationId_key";

-- DropIndex
DROP INDEX "PartComputer_maintenanceId_key";

-- DropIndex
DROP INDEX "Product_product_typeId_key";

-- DropIndex
DROP INDEX "Product_stateId_key";

-- DropIndex
DROP INDEX "Program_softwarecomputerId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Computer_internal_code_key" ON "Computer"("internal_code");
