/*
  Warnings:

  - You are about to drop the column `computerId` on the `Program` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Program" DROP CONSTRAINT "Program_computerId_fkey";

-- AlterTable
ALTER TABLE "Program" DROP COLUMN "computerId";

-- CreateTable
CREATE TABLE "_ComputerToProgram" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ComputerToProgram_AB_unique" ON "_ComputerToProgram"("A", "B");

-- CreateIndex
CREATE INDEX "_ComputerToProgram_B_index" ON "_ComputerToProgram"("B");

-- AddForeignKey
ALTER TABLE "_ComputerToProgram" ADD FOREIGN KEY ("A") REFERENCES "Computer"("id_computer") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComputerToProgram" ADD FOREIGN KEY ("B") REFERENCES "Program"("id_program") ON DELETE CASCADE ON UPDATE CASCADE;
