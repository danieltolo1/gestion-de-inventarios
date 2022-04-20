/*
  Warnings:

  - Added the required column `name_part` to the `PartComputer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PartComputer" ADD COLUMN     "name_part" TEXT NOT NULL;
