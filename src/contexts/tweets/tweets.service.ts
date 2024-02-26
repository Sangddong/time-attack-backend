import prismaClient from "../../db/prisma/client.prisma";
import { Request, Response } from "express";

const getTweets = async () => {
  const tweets = await prismaClient.tweets.findMany();

  return tweets;
}

const createTweet = async (req: Request, res: Response) => {
  const { authorId, content } = req.body;
  const tweet = await prismaClient.tweets.create({
    data: {
      author: { connect: { id: authorId } },
      content: content,
    }
  })

  return tweet;
}

const updateTweet = async (req: Request, res: Response) => {
  const { tweetId, content } = req.body;
  const updatedTweet = await prismaClient.tweets.update({
    where: { id: tweetId },
    data: {
      content: content,
      updatedAt: new Date(),
    }
  })

  return updatedTweet;
}

const deleteTweet = async (id: number) => {
  const deleteTweet = await prismaClient.tweets.delete({
    where: { id }
  })

  return deleteTweet;
}

// cosnt bookmarkTweet = async (id: number) => {
//   const bookmark = await prismaClient.bookmarks.create({

//   })
// }
const tweetService = {
  getTweets,
  createTweet,
  updateTweet,
  deleteTweet,
}
export default tweetService;

