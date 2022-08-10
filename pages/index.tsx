import type { NextPage } from 'next';
import Head from 'next/head';
import { Feed } from '../components/Feed';
import { Post, Category } from '../shared/types';
import { fetchPosts, fetchCategories } from '../api/summary';

type FrontProps = {
  posts: Post[];
  categories: Category[];
};

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

export async function getStaticProps() {
  const categories = await fetchCategories();
  const posts = await fetchPosts();
  return { props: { posts, categories } };
}

export default Front;
