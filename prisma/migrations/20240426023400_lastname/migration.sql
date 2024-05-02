/*
  Warnings:

  - You are about to drop the column `last_name` on the `Users` table. All the data in the column will be lost.
  - Added the required column `lastname` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "last_name",
ADD COLUMN     "lastname" TEXT NOT NULL;
