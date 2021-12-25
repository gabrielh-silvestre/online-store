import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { HiCheckCircle, HiXCircle } from 'react-icons/hi';
import { BuyButton } from '../../../src/components/BuyButton';

import { apiDetailItem, apiSellerInfo } from '../../../src/services/api';

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

interface ProductDetailProps {
  productDetail: {
    id: string;
    title: string;
    seller_id: number;
    price: number;
    currency_id: string;
    available_quantity: number;
    secure_thumbnail: string;
    pictures: Array<{
      secure_url: string;
      max_size: string;
    }>;
    shipping: {
      free_shipping: boolean;
    };
  };
  seller: {
    id: number;
    nickname: string;
    address: {
      city: string;
      state: string;
    };
    permalink: string;
  };
}

const ProductDetail = ({ productDetail, seller }: ProductDetailProps) => {
  const formatedPrice = () => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: productDetail.currency_id,
    }).format(productDetail.price);
  };

  const isShippingFree = () =>
    productDetail.shipping.free_shipping ? (
      <HiCheckCircle className="w-6 h-6 inline-block text-green" />
    ) : (
      <HiXCircle className="w-6 h-6 inline-block text-red" />
    );

  return (
    <div className="bg-black">
      <Head>
        <title>
          {productDetail.title} | {seller.nickname}
        </title>
      </Head>
      <Container>
        <ContentContainer>
          <h1 className="col-span-2 text-black text-4xl">
            {productDetail.title}
          </h1>

          <ProductContainer>
            <ImageContainer>
              <Image
                src={productDetail.pictures[0].secure_url}
                width={400}
                height={400}
                alt={productDetail.title}
              />
            </ImageContainer>

            <ProductContent>
              <h4 className="text-gray text-xl">
                Vendido por:{' '}
                <a
                  href={seller.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red"
                >
                  {seller.nickname}
                </a>
              </h4>

              <div>
                <ProductPrice>{formatedPrice()}</ProductPrice>
                <ProductQuantiy>
                  Quantidade disponível: {productDetail.available_quantity}
                </ProductQuantiy>
                <ProductShipping>
                  Frete grátis: {isShippingFree()}
                </ProductShipping>
              </div>

              <ButtonContainer>
                <BuyButton />
              </ButtonContainer>
            </ProductContent>
          </ProductContainer>
        </ContentContainer>
      </Container>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query: { id },
}) => {
  const res = await apiDetailItem(id as string);
  const seller = await apiSellerInfo(`${res.data.seller_id}`);

  return {
    props: {
      productDetail: res.data,
      seller: seller.data,
    },
  };
};

export default ProductDetail;
