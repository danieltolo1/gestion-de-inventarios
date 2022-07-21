/*
  Warnings:

  - You are about to drop the column `computerId` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Location` table. All the data in the column will be lost.
  - Added the required column `locationId` to the `Computer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_computerId_fkey";

-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_productId_fkey";

-- DropIndex
DROP INDEX "Location_computerId_key";

-- DropIndex
DROP INDEX "Location_productId_key";

-- AlterTable
ALTER TABLE "Computer" ADD COLUMN     "locationId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "computerId",
DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "locationId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id_location") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Computer" ADD CONSTRAINT "Computer_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id_location") ON DELETE RESTRICT ON UPDATE CASCADE;
