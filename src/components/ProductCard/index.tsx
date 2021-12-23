import Image from 'next/image';

import { HiTruck } from 'react-icons/hi';
import { BuyButton } from '../BuyButton';

import { Container, ProductInfo, ProductName, ProductPrice } from './styles';

export function ProductCard() {
  return (
    <Container>
      <Image
        width={300}
        height={300}
        src="http://http2.mlstatic.com/D_983592-MLB45095907129_032021-O.jpg"
        alt="Título"
        className="rounded-t-md"
      />

      <ProductInfo>
        <ProductName>
          Lampada Super Led Headlight H1/h3/h4/h7/h11/h16/h27/hb3/hb4
        </ProductName>
        <ProductPrice>R$44,90</ProductPrice>
        <div className="flex justify-between">
          Frete grátis:
          <HiTruck className="w-6 h-6 text-green inline-block" />
        </div>
      </ProductInfo>

      <BuyButton />
    </Container>
  );
}
