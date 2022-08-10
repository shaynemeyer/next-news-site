import Link from 'next/link';
import { Card, Figure, Title, Excerpt } from './PostCardStyle';

export const PostCard = () => {
  return (
    <Link href="/post/example" passHref>
      <Card>
        <Figure>
          <img src="/images/image2.jpg" alt="Post photo" />
        </Figure>
        <Title>Post title!</Title>
        <Excerpt>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
            praesentium nam libero hic necessitatibus eius quasi optio iure
            earum ab? Doloremque eum architecto maxime obcaecati, porro nihil
            cupiditate illum in?
          </p>
        </Excerpt>
      </Card>
    </Link>
  );
};
