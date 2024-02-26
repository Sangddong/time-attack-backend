import prismaClient from "../../db/prisma/client.prisma";
import { Request, Response } from "express";

const getTweets = async () => {
  const tweets = await prismaClient.tweets.findMany();

  return tweets;
}

const createTweet = async (req: Request, res: Response) => {
  const { authorId, content } = req.body;
  const response = await prismaClient.tweets.create({
    data: {
      author: { connect: { id: authorId } },
      content: content,
      createdAt: new Date
    }
  })

  res.json(response);
}

const updateTweet = async (req: Request, res: Response) => {
  const { tweetId, content } = req.body;
  const response = await prismaClient.tweets.update({
    where: { id: tweetId },
    data: {
      content: content,
      updatedAt: new Date(),
    }
  })

  res.json(response);
}

const deleteTweet = async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await prismaClient.tweets.delete({
    where: { id: parseInt(id) }
  })

  res.json(response);
}

const tweetService = {
  getTweets,
  createTweet,
  updateTweet,
  deleteTweet,
}
export default tweetService;

