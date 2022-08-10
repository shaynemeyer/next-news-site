import type { NextPage } from 'next';
import Head from 'next/head';
import { Feed } from '../components/Feed';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Front page of Internet</title>
      </Head>
      <main>
        <Feed />
      </main>
    </>
  );
};

export default Home;
