import { EntityId, Person } from '../../shared/types';
import { config } from '../config';

export async function submitComment(
  postId: EntityId,
  name: Person,
  comment: string
): Promise<Response> {
  return await fetch(`${config.baseUrl}/posts/${postId}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({ name, comment }),
  });
}
