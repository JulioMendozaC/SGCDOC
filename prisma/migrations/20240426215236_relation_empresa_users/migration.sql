-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "empresaId" INTEGER;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
