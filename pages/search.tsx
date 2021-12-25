import { GetServerSideProps } from 'next';

import { apiSearch } from '../src/services/api';

import { Products } from '../src/components/Products';

interface SearchProps {
  products: {
    results: [],
  };
}

const Search = ({ products }: SearchProps) => {
  return (
    <main className="min-h-screen relative bg-black pb-8">
      <div className="container">
        <Products products={products.results} />
      </div>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query: { q },
}) => {
  const res = await apiSearch({ term: q } as { term: string });

  return {
    props: {
      products: res.data,
    },
  };
};

export default Search;
