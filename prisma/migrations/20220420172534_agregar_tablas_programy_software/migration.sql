-- AlterTable
ALTER TABLE "Computer" ALTER COLUMN "buy_date" DROP NOT NULL,
ALTER COLUMN "price" DROP NOT NULL,
ALTER COLUMN "optical_unit" DROP NOT NULL,
ALTER COLUMN "historial" DROP NOT NULL,
ALTER COLUMN "observation" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Maintenance" ALTER COLUMN "date_maintenance" DROP NOT NULL,
ALTER COLUMN "jworkerNameFirm" DROP NOT NULL;

-- AlterTable
ALTER TABLE "PartComputer" ALTER COLUMN "name_part" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "serial_number" DROP NOT NULL,
ALTER COLUMN "imei" DROP NOT NULL,
ALTER COLUMN "observation" DROP NOT NULL,
ALTER COLUMN "picture" DROP NOT NULL,
ALTER COLUMN "model" DROP NOT NULL,
ALTER COLUMN "size" DROP NOT NULL,
ALTER COLUMN "tecnology" DROP NOT NULL,
ALTER COLUMN "conectivity" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Program" ALTER COLUMN "version_program" DROP NOT NULL,
ALTER COLUMN "license_program" DROP NOT NULL;

-- AlterTable
ALTER TABLE "SoftwareComputer" ALTER COLUMN "user_anydesk" DROP NOT NULL,
ALTER COLUMN "pass_anydesk" DROP NOT NULL,
ALTER COLUMN "user_domain" DROP NOT NULL,
ALTER COLUMN "pass_domain" DROP NOT NULL,
ALTER COLUMN "user_admin" DROP NOT NULL,
ALTER COLUMN "pass_admin" DROP NOT NULL,
ALTER COLUMN "user_local" DROP NOT NULL,
ALTER COLUMN "pass_local" DROP NOT NULL;
