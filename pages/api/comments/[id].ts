import path from 'path';
import { writeFile } from 'fs/promises';

import type { NextApiRequest, NextApiResponse } from 'next';
import type { Comment, EntityId } from '../../../shared/types';
import commentsSource from '../../../server/comments.json';

const comments = commentsSource as Comment[];

function commentsForPost(postId: EntityId) {
  return comments.filter(({ post }) => post === postId);
}

export default function commentsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = Number(req.query.id);

  switch (req.method) {
    case 'GET': {
      return res.status(200).json(commentsForPost(postId));
    }
    case 'POST': {
      comments.push({
        id: comments.length + 1,
        author: req.body.name,
        content: req.body.comment,
        post: postId,
        time: 'Less than a minute ago',
      });

      writeFile(
        path.resolve(process.cwd(), 'server/comments.json'),
        JSON.stringify(comments)
      );

      return res.json(commentsForPost(postId));
    }
    default:
      return res.status(404);
  }
}
