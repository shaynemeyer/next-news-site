import Head from 'next/head';
import { Feed } from '../components/Feed';
import { Post, Category } from '../shared/types';
import { fetchPosts, fetchCategories } from '../request';

type FrontProps = {
  posts: Post[];
  categories: Category[];
};

export async function getServerSideProps() {
  const categories = await fetchCategories();
  const posts = await fetchPosts();
  return { props: { posts, categories } };
}

const Front = ({ posts, categories }: FrontProps) => {
  return (
    <>
      <Head>
        <title>Front page of Internet</title>
      </Head>
      <main>
        <Feed posts={posts} categories={categories} />
      </main>
    </>
  );
};

export default Front;
