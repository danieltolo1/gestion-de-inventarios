/*
  Warnings:

  - You are about to drop the column `ip` on the `SoftwareComputer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Computer" ADD COLUMN     "ip" TEXT;

-- AlterTable
ALTER TABLE "SoftwareComputer" DROP COLUMN "ip";
