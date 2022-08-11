import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Post } from '../../shared/types';
import { fetchCategory } from '../../request';
import { Section } from '../../components/Section';
import { Loader } from '../../components/Loader';

type CategoryProps = {
  posts: Post[];
};

export const getServerSideProps: GetServerSideProps<CategoryProps> = async ({
  params,
}) => {
  if (typeof params?.id !== 'string') throw new Error('Unexpected id');
  const posts = await fetchCategory(params?.id);
  return { props: { posts } };
};

const Category = ({ posts }: CategoryProps) => {
  const router = useRouter();

  if (router.isFallback) return <Loader />;
  return <Section posts={posts} title={String(router.query.id)} />;
};

export default Category;
