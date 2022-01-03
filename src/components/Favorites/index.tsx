import { useSelector } from 'react-redux';

import { RootState } from '../../store';

import { ProductCard } from '../ProductCard';
import { Container } from './styles';

export function Favorites() {
  const favorite = useSelector(({ favorite }: RootState) => favorite);

  return favorite.length !== 0 ? (
    <Container>
      {favorite.map((favoriteItem) => (
        <ProductCard key={favoriteItem.id} {...favoriteItem} />
      ))}
    </Container>
  ) : (
    <div>Sem favoritos</div>
  );
}
