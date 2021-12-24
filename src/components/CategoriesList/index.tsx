import Link from 'next/link';
import { useEffect, useState } from 'react';

import { apiListCategories } from '../../services/api';

import { CategoriesNav, CategoryItem } from './styles';

interface Categories {
  name: string;
  id: string;
}

export function CategoriesList() {
  const [categories, setCategories] = useState<Categories[]>([]);

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
        <Link key={id} passHref href={`/category/${id}`}>
          <CategoryItem>{name}</CategoryItem>
        </Link>
      ))}
    </CategoriesNav>
  );
}
