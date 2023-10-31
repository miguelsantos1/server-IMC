-- CreateTable
CREATE TABLE "Cliente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "CPF" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_CPF_key" ON "Cliente"("CPF");
