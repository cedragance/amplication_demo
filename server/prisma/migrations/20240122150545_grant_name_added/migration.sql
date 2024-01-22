/*
  Warnings:

  - Added the required column `name` to the `Grant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Grant" ADD COLUMN     "name" TEXT NOT NULL;
