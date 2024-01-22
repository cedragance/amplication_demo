-- CreateTable
CREATE TABLE "AppRole" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AppRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Grant" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Grant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AppRoleToGrant" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AppRoleToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AppRoleToGrant_AB_unique" ON "_AppRoleToGrant"("A", "B");

-- CreateIndex
CREATE INDEX "_AppRoleToGrant_B_index" ON "_AppRoleToGrant"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AppRoleToUser_AB_unique" ON "_AppRoleToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_AppRoleToUser_B_index" ON "_AppRoleToUser"("B");

-- AddForeignKey
ALTER TABLE "_AppRoleToGrant" ADD CONSTRAINT "_AppRoleToGrant_A_fkey" FOREIGN KEY ("A") REFERENCES "AppRole"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppRoleToGrant" ADD CONSTRAINT "_AppRoleToGrant_B_fkey" FOREIGN KEY ("B") REFERENCES "Grant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppRoleToUser" ADD CONSTRAINT "_AppRoleToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "AppRole"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppRoleToUser" ADD CONSTRAINT "_AppRoleToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
