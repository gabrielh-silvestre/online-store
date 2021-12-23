import Link from 'next/link';
import { CategoriesNav, CategoryItem } from './styles';

export function CategoriesList() {
  return (
    <CategoriesNav>
      <Link passHref href={'/'}>
        <CategoryItem>Carro</CategoryItem>
      </Link>
      <Link passHref href={'/'}>
        <CategoryItem>Carro</CategoryItem>
      </Link>
      <Link passHref href={'/'}>
        <CategoryItem>Carro</CategoryItem>
      </Link>
      <Link passHref href={'/'}>
        <CategoryItem>Carro</CategoryItem>
      </Link>
      <Link passHref href={'/'}>
        <CategoryItem>Carro</CategoryItem>
      </Link>
    </CategoriesNav>
  );
}
