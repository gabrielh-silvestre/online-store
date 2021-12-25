import { NextPage } from 'next';
import Image from 'next/image';

import { BuyButton } from '../../../src/components/BuyButton';

import {
  ButtonContainer,
  Container,
  ContentContainer,
  ImageContainer,
  ProductContainer,
  ProductContent,
  ProductPrice,
  ProductQuantiy,
  ProductShipping,
} from './style';

const ProductDetail: NextPage = () => {
  return (
    <Container>
      <ContentContainer>
        <h1 className="col-span-2 text-black text-4xl">Título</h1>

        <ProductContainer>
          <ImageContainer>
            <Image
              src="https://http2.mlstatic.com/D_628537-MLB43953905133_102020-O.jpg"
              width={400}
              height={400}
              alt="Título"
            />
          </ImageContainer>

          <ProductContent>
            <h4 className="text-gray text-xl">
              Vendido por: <span className="text-red">Seller</span>
            </h4>

            <div>
              <ProductPrice>R$ 100,00</ProductPrice>
              <ProductQuantiy>Quantity</ProductQuantiy>
              <ProductShipping>Free Shipping</ProductShipping>
            </div>

            <ButtonContainer>
              <BuyButton />
            </ButtonContainer>
          </ProductContent>
        </ProductContainer>
      </ContentContainer>
    </Container>
  );
};

export default ProductDetail;
