/*
  Warnings:

  - You are about to drop the column `pass_admin` on the `SoftwareComputer` table. All the data in the column will be lost.
  - You are about to drop the column `pass_anydesk` on the `SoftwareComputer` table. All the data in the column will be lost.
  - You are about to drop the column `pass_domain` on the `SoftwareComputer` table. All the data in the column will be lost.
  - You are about to drop the column `pass_local` on the `SoftwareComputer` table. All the data in the column will be lost.
  - You are about to drop the column `user_admin` on the `SoftwareComputer` table. All the data in the column will be lost.
  - You are about to drop the column `user_anydesk` on the `SoftwareComputer` table. All the data in the column will be lost.
  - You are about to drop the column `user_domain` on the `SoftwareComputer` table. All the data in the column will be lost.
  - You are about to drop the column `user_local` on the `SoftwareComputer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Computer" ADD COLUMN     "pass_admin" TEXT,
ADD COLUMN     "pass_anydesk" TEXT,
ADD COLUMN     "pass_domain" TEXT,
ADD COLUMN     "pass_local" TEXT,
ADD COLUMN     "user_admin" TEXT,
ADD COLUMN     "user_anydesk" TEXT,
ADD COLUMN     "user_domain" TEXT,
ADD COLUMN     "user_local" TEXT;

-- AlterTable
ALTER TABLE "SoftwareComputer" DROP COLUMN "pass_admin",
DROP COLUMN "pass_anydesk",
DROP COLUMN "pass_domain",
DROP COLUMN "pass_local",
DROP COLUMN "user_admin",
DROP COLUMN "user_anydesk",
DROP COLUMN "user_domain",
DROP COLUMN "user_local";
