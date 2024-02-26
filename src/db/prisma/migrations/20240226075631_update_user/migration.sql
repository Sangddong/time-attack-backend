-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_tweetId_fkey";

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_tweetId_fkey" FOREIGN KEY ("tweetId") REFERENCES "Tweets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
