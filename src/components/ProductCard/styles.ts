import tw from 'tailwind-styled-components';

export const Container = tw.section`
  flex
  flex-col

  rounded-md

  transition-shadow
  duration-200

  hover:shadow-lg
`;

export const ProductInfo = tw.div`
  relative

  px-4
  my-2

  flex
  flex-col
`;

export const ProductName = tw.h4`
  text-black
  text-lg
  font-bold
  truncate
`;

export const ProductPrice = tw.p`
  text-3xl
  text-red
  font-bold

  my-2
`;
