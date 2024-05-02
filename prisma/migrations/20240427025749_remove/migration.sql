/*
  Warnings:

  - Made the column `empresaId` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "empresaId" SET NOT NULL;
