import { NextPage } from 'next';
import { Bill } from '../src/components/Bill';

import { CartButton } from '../src/components/CartButton';
import { CartItems } from '../src/components/CartItems';

import {
  Container,
  ContentContainer,
  CartItemsContainer,
  SectionTitle,
  CartBillContainer,
  FinalPrice,
  CupomContainer,
  CupomInput,
} from '../styles/pageCart';

const Cart: NextPage = () => {
  return (
    <Container>
      <div className="container">
        <ContentContainer>
          <CartItemsContainer>
            <div className="grid grid-cols-3">
              <SectionTitle>Produto</SectionTitle>
              <div>
                <CartButton fontSize="text-sm">
                  REMOVER TODOS OS PRODUTOS
                </CartButton>
              </div>
            </div>

            <div className="my-4">
              <CartItems />
            </div>

            <CupomContainer>
              <CupomInput type="text" placeholder="Cupom de desconto" />
              <CartButton isStrong>Aplicar cupom</CartButton>
            </CupomContainer>
          </CartItemsContainer>

          <CartBillContainer>
            <SectionTitle>Resumo</SectionTitle>

            <div className="my-4">
              <Bill />
            </div>

            <FinalPrice>R$200,00</FinalPrice>

            <div className="h-12">
              <CartButton isStrong>Finalizar</CartButton>
            </div>
          </CartBillContainer>
        </ContentContainer>
      </div>
    </Container>
  );
};

export default Cart;
