/*
  Warnings:

  - You are about to drop the column `fk_task_user` on the `Task` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_fk_task_user_fkey";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "fk_task_user",
ADD COLUMN     "user_id" TEXT;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
