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

const DEFAULT_CATEGORY_ITEM = { id: '', name: 'Nenhuma' };

export function CategoriesList() {
  const [categories, setCategories] = useState<Categories[]>([]);
  const { searchTerm, category } = useSelector(
    ({ search }: RootState) => search
  );
  const dispatch = useDispatch();

  const handleSelectCategory = (categoryId: string) => {
    dispatch(setCategory(categoryId));
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await apiListCategories;
      setCategories([DEFAULT_CATEGORY_ITEM, ...res.data]);
    };

    fetchCategories();
  }, []);

  return (
    <CategoriesNav>
      {categories.map(({ id, name }) => (
        <Link key={id} passHref href={`/search?q=${searchTerm}&category=${id}`}>
          <CategoryItem
            $isSelected={id === category}
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
