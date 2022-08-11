import type { NextApiRequest, NextApiResponse } from 'next';
import type { Category } from '../../../shared/types';
import categoriesSource from '../../../server/categories.json';

export default function categoriesHandler(
  req: NextApiRequest,
  res: NextApiResponse<Category[]>
) {
  const categories = categoriesSource as Category[];
  return res.status(200).json(categories);
}
