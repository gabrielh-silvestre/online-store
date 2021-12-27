import tw from 'tailwind-styled-components';

export const Container = tw.div`
  my-2
  mx-4

  flex
  items-center
  justify-between
`;

export const ProductName = tw.h3`
  w-60

  font-bold
  text-center
  text-black
  truncate
`;

export const ProductQuantity = tw.div`
  mt-1

  flex
  items-center

  text-base
`;

export const ProductPrice = tw.h5`
  font-bold
  text-xl
  text-red
`;
