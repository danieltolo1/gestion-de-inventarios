/*
  Warnings:

  - You are about to drop the column `productId` on the `Maintenance` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Maintenance" DROP CONSTRAINT "Maintenance_productId_fkey";

-- AlterTable
ALTER TABLE "Maintenance" DROP COLUMN "productId";

-- CreateTable
CREATE TABLE "_MaintenanceToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MaintenanceToProduct_AB_unique" ON "_MaintenanceToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_MaintenanceToProduct_B_index" ON "_MaintenanceToProduct"("B");

-- AddForeignKey
ALTER TABLE "_MaintenanceToProduct" ADD FOREIGN KEY ("A") REFERENCES "Maintenance"("id_maintenance") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MaintenanceToProduct" ADD FOREIGN KEY ("B") REFERENCES "Product"("id_product") ON DELETE CASCADE ON UPDATE CASCADE;
