-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Empresas" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Empresas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Foda" (
    "id" SERIAL NOT NULL,
    "fortalezas" TEXT NOT NULL,
    "oportunidades" TEXT NOT NULL,
    "debilidades" TEXT NOT NULL,
    "amenazas" TEXT NOT NULL,

    CONSTRAINT "Foda_pkey" PRIMARY KEY ("id")
);
