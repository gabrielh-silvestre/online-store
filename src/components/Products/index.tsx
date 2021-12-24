import { useSelector } from 'react-redux';

import { RootState } from '../../store';

import { ProductCard } from '../ProductCard';

import { Container } from './styles';

export function Products() {
  const products = useSelector(({ products }: RootState) => products.products);

  return (
    <Container>
      {products.length !== 0 ? (
        products.map((product) => <ProductCard key={product.id} {...product} />)
      ) : (
        <h3>Pesquise algo</h3>
      )}
    </Container>
  );
}
