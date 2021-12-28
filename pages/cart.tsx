import { NextPage } from 'next';

import { Bill } from '../src/components/Bill';
import { CartButton } from '../src/components/CartButton';
import { CartItems } from '../src/components/CartItems';

import {
  Container,
  ContentContainer,
  CartItemsContainer,
  SectionTitle,
  CartResumeContainer,
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

          <CartResumeContainer>
            <SectionTitle>Resumo</SectionTitle>

            <Bill />

            <div className="h-12">
              <CartButton isStrong>Finalizar</CartButton>
            </div>
          </CartResumeContainer>
        </ContentContainer>
      </div>
    </Container>
  );
};

export default Cart;
