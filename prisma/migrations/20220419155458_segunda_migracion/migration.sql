/*
  Warnings:

  - You are about to drop the `Inventario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MovimientoInventario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Producto` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `job_name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Inventario" DROP CONSTRAINT "Inventario_productoId_fkey";

-- DropForeignKey
ALTER TABLE "MovimientoInventario" DROP CONSTRAINT "MovimientoInventario_inventarioId_fkey";

-- DropForeignKey
ALTER TABLE "MovimientoInventario" DROP CONSTRAINT "MovimientoInventario_usuarioId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "job_name" TEXT NOT NULL;

-- DropTable
DROP TABLE "Inventario";

-- DropTable
DROP TABLE "MovimientoInventario";

-- DropTable
DROP TABLE "Producto";

-- DropEnum
DROP TYPE "Enum_TipoMovimiento";

-- CreateTable
CREATE TABLE "Product" (
    "id_product" SERIAL NOT NULL,
    "internal_code" TEXT NOT NULL,
    "serial_number" TEXT NOT NULL,
    "imei" TEXT NOT NULL,
    "observation" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "product_typeId" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "tecnology" TEXT NOT NULL,
    "conectivity" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id_product")
);

-- CreateTable
CREATE TABLE "Product_Type" (
    "id_product_type" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Product_Type_pkey" PRIMARY KEY ("id_product_type")
);

-- CreateTable
CREATE TABLE "State" (
    "id_state" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id_state")
);

-- CreateTable
CREATE TABLE "Computer" (
    "id_computer" SERIAL NOT NULL,
    "buy_date" TIMESTAMP(3) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "internal_code" TEXT NOT NULL,
    "serial_number" TEXT NOT NULL,
    "memory" TEXT NOT NULL,
    "hard_disk" TEXT NOT NULL,
    "processor" TEXT NOT NULL,
    "optical_unit" BOOLEAN NOT NULL,
    "model" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,

    CONSTRAINT "Computer_pkey" PRIMARY KEY ("id_computer")
);

-- CreateTable
CREATE TABLE "PartComputer" (
    "id_partComputer" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "computerId" INTEGER NOT NULL,
    "locationId" INTEGER NOT NULL,
    "maintenanceId" INTEGER NOT NULL,

    CONSTRAINT "PartComputer_pkey" PRIMARY KEY ("id_partComputer")
);

-- CreateTable
CREATE TABLE "Location" (
    "id_location" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "job_name" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id_location")
);

-- CreateTable
CREATE TABLE "Maintenance" (
    "id_maintenance" SERIAL NOT NULL,
    "date_maintenance" TIMESTAMP(3) NOT NULL,
    "jworkerNameFirm" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Maintenance_pkey" PRIMARY KEY ("id_maintenance")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_internal_code_key" ON "Product"("internal_code");

-- CreateIndex
CREATE UNIQUE INDEX "Product_product_typeId_key" ON "Product"("product_typeId");

-- CreateIndex
CREATE UNIQUE INDEX "Product_stateId_key" ON "Product"("stateId");

-- CreateIndex
CREATE UNIQUE INDEX "Computer_stateId_key" ON "Computer"("stateId");

-- CreateIndex
CREATE UNIQUE INDEX "PartComputer_productId_key" ON "PartComputer"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "PartComputer_computerId_key" ON "PartComputer"("computerId");

-- CreateIndex
CREATE UNIQUE INDEX "PartComputer_locationId_key" ON "PartComputer"("locationId");

-- CreateIndex
CREATE UNIQUE INDEX "PartComputer_maintenanceId_key" ON "PartComputer"("maintenanceId");

-- CreateIndex
CREATE UNIQUE INDEX "Maintenance_userId_key" ON "Maintenance"("userId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_product_typeId_fkey" FOREIGN KEY ("product_typeId") REFERENCES "Product_Type"("id_product_type") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id_state") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Computer" ADD CONSTRAINT "Computer_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id_state") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartComputer" ADD CONSTRAINT "PartComputer_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id_product") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartComputer" ADD CONSTRAINT "PartComputer_computerId_fkey" FOREIGN KEY ("computerId") REFERENCES "Computer"("id_computer") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartComputer" ADD CONSTRAINT "PartComputer_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id_location") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartComputer" ADD CONSTRAINT "PartComputer_maintenanceId_fkey" FOREIGN KEY ("maintenanceId") REFERENCES "Maintenance"("id_maintenance") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Maintenance" ADD CONSTRAINT "Maintenance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
