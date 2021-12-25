import { ProductCard } from '../ProductCard';

import { Container } from './styles';

interface ProductsProps {
  products:
    | Array<{
        id: string;
        title: string;
        price: number;
        currency_id: string;
        avaible_quantity: number;
        thumbnail: string;
        shipping: {
          free_shipping: boolean;
        };
      }>
    | [];
}

export function Products({ products }: ProductsProps) {
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
