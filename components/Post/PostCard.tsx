import Link from 'next/link';
import { Post } from '../../shared/types';
import { Card, Figure, Title, Excerpt } from './PostCardStyle';

type PostCardProps = {
  post: Post;
};

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link href={`/post/${post.id}`} passHref>
      <Card>
        <Figure>
          <img src={post.image} alt={post.title} />
        </Figure>
        <Title>{post.title}</Title>
        <Excerpt>{post.lead}</Excerpt>
      </Card>
    </Link>
  );
};
