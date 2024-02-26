import prismaClient from "../../db/prisma/client.prisma";
import { CreateTweetData, ReadTweetData } from "./tweets.type";

const getTweets = async () => {
  const tweets = await prismaClient.tweets.findMany();

  return tweets;
}

// const createTweet = async (createTweetData: CreateTweetData) => {
//   const { authorId, content } = createTweetData;
//   const tweet = await prismaClient.tweets.create({
//     data: {
//       content,
//       author: { connect: { id: authorId } }
//     }
//   });
// }

// const tweetService = {
//   getTweets,
//   createTweet
// }

// export default tweetService;

