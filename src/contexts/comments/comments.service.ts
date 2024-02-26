import prismaClient from "../../db/prisma/client.prisma";
import { Request, Response } from "express";

const createComment = async (req: Request, res: Response) => {
  const { authorId, tweetId, content } = req.body;
  const response = await prismaClient.comments.create({
    data: {
      author: { connect: { id: authorId } },
      tweet: { connect: { id: tweetId } },
      content: content,
      createdAt: new Date
    }
  })

  res.json(response);
}

const updateComment = async (req: Request, res: Response) => {
  const { commentId, content } = req.body;
  const response = await prismaClient.comments.update({
    where: { id: commentId },
    data: {
      content: content,
      updatedAt: new Date(),
    }
  })

  res.json(response);
}

const deleteComment = async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await prismaClient.comments.delete({
    where: { id: parseInt(id) }
  })

  res.json(response);
}

const commentService = {
  createComment,
  updateComment,
  deleteComment,
}
export default commentService;

