import { ReactNode } from 'react';
import { CartButtonContainer } from './styles';

interface CartButtonProps {
  children: ReactNode;
  isStrong?: boolean;
  fontSize?: string;
  onClick?: () => void;
}

export function CartButton({
  children,
  isStrong,
  fontSize,
  onClick,
}: CartButtonProps) {
  return (
    <CartButtonContainer
      $fontSize={fontSize}
      $isStrong={isStrong}
      type="button"
      onClick={onClick}
    >
      {children}
    </CartButtonContainer>
  );
}
