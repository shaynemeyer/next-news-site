import type { NextApiRequest, NextApiResponse } from 'next';
import type { Post } from '../../../shared/types';
import postsSource from '../../../server/posts.json';

export default function postHandler(
  req: NextApiRequest,
  res: NextApiResponse<Post>
) {
  const posts = postsSource as Post[];
  const wantedId = String(req.query.id);
  const post = posts.find(({ id }: Post) => String(id) === wantedId);
  return res.status(200).json(post as Post);
}
