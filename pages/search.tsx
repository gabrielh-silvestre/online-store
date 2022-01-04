import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetServerSideProps } from 'next';

import { apiSearch } from '../src/services/api';
import { setCategory, setSearchTerm } from '../src/actions';

import { Products } from '../src/components/Products';

interface SearchProps {
  products: {
    results: [];
  };
}

const Search = ({ products }: SearchProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setCategory(''));
      dispatch(setSearchTerm(''));
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      <main className="min-h-screen relative bg-gray-light pb-8">
        <div className="container">
          <Products products={products.results} />
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query: { q, category },
}) => {
  const res = await apiSearch({ term: q, category } as {
    term: string;
    category: string;
  });

  return {
    props: {
      products: res.data,
    },
  };
};

export default Search;
