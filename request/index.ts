import { UriString, EntityId, Person, Post } from '../shared/types';
import { config } from './config';

const { baseUrl } = config;

async function request<TResponse>(url: UriString) {
  const response = await fetch(`${baseUrl}/${url}`);
  const data = (await response.json()) as TResponse;
  return data;
}

async function post<TPayload>(url: UriString, data: TPayload) {
  return fetch(`${baseUrl}/${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(data),
  });
}

export const fetchPosts = () => request('posts');
export const fetchPost = (id: EntityId) => request(`posts/${id}`);

export const fetchCategories = () => request('categories');
export const fetchCategory = (categoryId: EntityId) =>
  request<Post[]>(`categories/${categoryId}`);

export const fetchComments = (postId: EntityId) =>
  request(`comments/${postId}`);

export const submitComment = (
  postId: EntityId,
  name: Person,
  comment: string
) => post(`comments/${postId}`, { name, comment });
