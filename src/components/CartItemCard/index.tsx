import Image from 'next/image';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import {
  Container,
  ProductName,
  ProductPrice,
  ProductQuantity,
} from './styles';

export function CartItemCard() {
  return (
    <Container>
      <Image
        width={90}
        height={90}
        src="http://http2.mlstatic.com/D_920702-MLB45385544585_032021-I.jpg"
        alt="Nome do produto"
      />
      <ProductName>Nome do Produto</ProductName>
      <p className="text-xs text-center">
        Quant:
        <ProductQuantity>
          <HiChevronLeft className="w-6 h-6 text-red" />
          1
          <HiChevronRight className="w-6 h-6 text-red" />
        </ProductQuantity>
      </p>
      <ProductPrice>R$ 100,00</ProductPrice>
    </Container>
  );
}
