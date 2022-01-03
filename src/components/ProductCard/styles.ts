import tw from 'tailwind-styled-components';

export const Container = tw.section`
  relative

  flex
  flex-col

  rounded-md

  bg-white

  shadow

  transition-shadow
  duration-300

  hover:shadow-xl
`;

export const ProductInfo = tw.div`
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

export const ProductShipping = tw.div`
  flex
  justify-between
`;

export const ButtonContainer = tw.div`
  w-full
  h-12
`;
