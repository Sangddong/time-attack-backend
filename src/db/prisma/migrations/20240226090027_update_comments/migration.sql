/*
  Warnings:

  - A unique constraint covering the columns `[nickname]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `content` to the `Comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comments" ADD COLUMN     "content" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_nickname_key" ON "User"("nickname");
