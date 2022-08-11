import type { NextApiRequest, NextApiResponse } from 'next';
import type { Post } from '../../../shared/types';
import postsSource from '../../../server/posts.json';

export default function categoryHandler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  const posts = postsSource as Post[];
  const found = posts.filter(({ category: id }: Post) => id === req.query.id);
  const categoryPosts = [...found, ...found, ...found];
  return res.status(200).json(categoryPosts);
}
