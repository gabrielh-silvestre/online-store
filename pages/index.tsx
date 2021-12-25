import type { NextPage } from 'next';

import { Products } from '../src/components/Products';

const Home: NextPage = () => {
  return (
    <main className="min-h-screen relative bg-black pb-8">
      <div className="container">
        <Products />
      </div>
    </main>
  );
};

export default Home;
