import type { NextPage } from 'next';

import { Products } from '../src/components/Products';

const Home: NextPage = () => {
  return (
    <main className="relative bg-gray-blue py-4">
      <div className="container">
        <Products />
      </div>
    </main>
  );
};

export default Home;
