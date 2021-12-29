import tw from 'tailwind-styled-components';

interface CartButtonContainerProps {
  $isStrong?: boolean;
  fontSize?: string;
}

export const CartButtonContainer = tw.button<{
  $isStrong?: boolean;
  $fontSize?: string;
}>`
  w-full
  h-full

  ${({ $isStrong }) => ($isStrong ? 'font-bold' : 'font-normal')}
  ${({ $fontSize }) => ($fontSize ? $fontSize : 'text-base')}
  text-white

  bg-red

  rounded-md
`;
