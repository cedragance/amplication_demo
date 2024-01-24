/*
  Warnings:

  - You are about to drop the column `uid` on the `Task` table. All the data in the column will be lost.
  - You are about to alter the column `text` on the `Task` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "uid",
ADD COLUMN     "fk_task_user" TEXT,
ALTER COLUMN "text" SET DATA TYPE VARCHAR(255);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_fk_task_user_fkey" FOREIGN KEY ("fk_task_user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
