import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../actions';

import { apiListCategories } from '../../services/api';
import { RootState } from '../../store';

import { CategoriesNav, CategoryItem } from './styles';

interface Categories {
  name: string;
  id: string;
}

export function CategoriesList() {
  const [categories, setCategories] = useState<Categories[]>([]);
  const { searchTerm } = useSelector(({ search }: RootState) => search);
  const dispatch = useDispatch();

  const handleSelectCategory = (categoryId: string) => {
    dispatch(setCategory(categoryId));
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await apiListCategories;
      setCategories(res.data);
    };

    fetchCategories();
  }, []);

  return (
    <CategoriesNav>
      {categories.map(({ id, name }) => (
        <Link key={id} passHref href={`/search?q=${searchTerm}&category=${id}`}>
          <CategoryItem
            onClick={() => {
              handleSelectCategory(id);
            }}
          >
            {name}
          </CategoryItem>
        </Link>
      ))}
    </CategoriesNav>
  );
}
