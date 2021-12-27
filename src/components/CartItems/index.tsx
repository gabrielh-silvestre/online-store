import { CartButton } from '../CartButton';
import { CartItemCard } from '../CartItemCard';

import {
  BillInfo,
  BillValue,
  CartBillContainer,
  CartItemsContainer,
  Container,
  ContentContainer,
  CupomContainer,
  CupomInput,
  FinalPrice,
  SectionTitle,
} from './styles';

export function CartItems() {
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
              <CartItemCard />
              <CartItemCard />
              <CartItemCard />
            </div>

            <CupomContainer>
              <CupomInput type="text" placeholder="Cupom de desconto" />
              <CartButton isStrong>Aplicar cupom</CartButton>
            </CupomContainer>
          </CartItemsContainer>

          <CartBillContainer>
            <SectionTitle>Resumo</SectionTitle>

            <div className="my-4">
              <BillInfo>
                Valor: <BillValue>R$ 200,00</BillValue>
              </BillInfo>
              <BillInfo>
                Frete: <BillValue>R$ 200,00</BillValue>
              </BillInfo>
              <BillInfo>
                Total: <BillValue>R$ 200,00</BillValue>
              </BillInfo>
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
}
