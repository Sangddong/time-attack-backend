/*
  Warnings:

  - You are about to drop the column `twittId` on the `Bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `twittId` on the `Comments` table. All the data in the column will be lost.
  - You are about to drop the `Twitts` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId,tweetId]` on the table `Bookmarks` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tweetId` to the `Bookmarks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tweetId` to the `Comments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Bookmarks" DROP CONSTRAINT "Bookmarks_twittId_fkey";

-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_twittId_fkey";

-- DropForeignKey
ALTER TABLE "Twitts" DROP CONSTRAINT "Twitts_authorId_fkey";

-- DropIndex
DROP INDEX "Bookmarks_userId_twittId_key";

-- AlterTable
ALTER TABLE "Bookmarks" DROP COLUMN "twittId",
ADD COLUMN     "tweetId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Comments" DROP COLUMN "twittId",
ADD COLUMN     "tweetId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Twitts";

-- CreateTable
CREATE TABLE "Tweets" (
    "id" SERIAL NOT NULL,
    "authorId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tweets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bookmarks_userId_tweetId_key" ON "Bookmarks"("userId", "tweetId");

-- AddForeignKey
ALTER TABLE "Tweets" ADD CONSTRAINT "Tweets_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_tweetId_fkey" FOREIGN KEY ("tweetId") REFERENCES "Tweets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarks" ADD CONSTRAINT "Bookmarks_tweetId_fkey" FOREIGN KEY ("tweetId") REFERENCES "Tweets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
