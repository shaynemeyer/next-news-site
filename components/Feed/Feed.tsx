import { Section } from '../Section';
import { Post, Category } from '../../shared/types';

type FeedProps = {
  posts: Post[];
  categories: Category[];
};

export const Feed = ({ posts, categories }: FeedProps) => {
  return (
    <>
      {categories.map((currentCategory: Category) => {
        const inSection = posts.filter(
          (post) => post.category === currentCategory
        );
        return (
          <Section
            key={currentCategory}
            posts={inSection}
            title={currentCategory}
          />
        );
      })}
    </>
  );
};
