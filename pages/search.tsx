import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../src/actions';

import { Products } from '../src/components/Products';

const Search: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { q } = router.query;

  useEffect(() => {
    dispatch(fetchProducts({ term: q } as { term?: string }));
  }, [dispatch, q]);

  return (
    <main className="min-h-screen relative bg-black pb-8">
      <div className="container">
        <Products />
      </div>
    </main>
  );
};

export default Search;
