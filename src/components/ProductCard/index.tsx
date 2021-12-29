import Image from 'next/image';
import Link from 'next/link';

import { HiCheckCircle, HiXCircle } from 'react-icons/hi';
import { BuyButton } from '../BuyButton';

import {
  ButtonContainer,
  Container,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductShipping,
} from './styles';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  available_quantity: number;
  thumbnail: string;
  shipping: {
    free_shipping: boolean;
  };
}

export function ProductCard(props: ProductCardProps) {
  const formatedPrice = () => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: props.currency_id,
    }).format(props.price);
  };

  const isShippingFree = () =>
    props.shipping.free_shipping ? (
      <HiCheckCircle className="w-6 h-6 inline-block text-green" />
    ) : (
      <HiXCircle className="w-6 h-6 inline-block text-red" />
    );

  return (
    <Container>
      <Link href={`/product/${props.id}`} passHref>
        <Image
          width={500}
          height={500}
          src={props.thumbnail}
          alt={props.title}
          className="rounded-t-md"
        />
      </Link>

      <ProductInfo>
        <ProductName>{props.title}</ProductName>
        <ProductPrice>{formatedPrice()}</ProductPrice>
        <ProductShipping>
          Frete grátis:
          {isShippingFree()}
        </ProductShipping>
      </ProductInfo>

      <ButtonContainer>
        <BuyButton {...props} />
      </ButtonContainer>
    </Container>
  );
}
