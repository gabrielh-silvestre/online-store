import type { NextPage } from 'next';

import { Products } from '../src/components/Products';

const Home: NextPage = () => {
  return (
    <main className="relative bg-black p-4">
      <Products />
    </main>
  );
};

export default Home;
