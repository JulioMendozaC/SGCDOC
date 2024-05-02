/*
  Warnings:

  - You are about to drop the column `createAt` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `Users` table. All the data in the column will be lost.
  - Added the required column `last_name` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "createAt",
DROP COLUMN "lastname",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "last_name" TEXT NOT NULL,
ALTER COLUMN "role" DROP NOT NULL;
