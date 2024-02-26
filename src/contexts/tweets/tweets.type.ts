export type CreateTweetData = {
  authorId: string,
  content: string
}

export type ReadTweetData = {
  tweetId: number
}

export type UpdateTweetData = {
  tweetId: number,
  content: string
}

export type DeleteTweetData = ReadTweetData;