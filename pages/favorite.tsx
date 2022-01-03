import { NextPage } from 'next';
import Head from 'next/head';

import { Favorites } from '../src/components/Favorites';

const Favorite: NextPage = () => {
  return (
    <>
      <Head>
        <title>Favorites</title>
      </Head>
      <main className="min-h-screen relative bg-gray-light pb-8">
        <div className="container">
          <Favorites />
        </div>
      </main>
    </>
  );
};

export default Favorite;
