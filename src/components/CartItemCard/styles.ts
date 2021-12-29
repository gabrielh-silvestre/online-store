import tw from 'tailwind-styled-components';

export const Container = tw.div`
  my-2
  mx-4

  grid
  grid-cols-5
  justify-items-center
`;

export const ProductName = tw.h3`
  w-60

  col-span-2
  self-center

  font-bold
  text-center
  text-black
  truncate
`;

export const ProductQuantity = tw.div`
  mt-1

  flex

  text-base
`;

export const ProductPrice = tw.h5`
  self-center

  font-bold
  text-xl
  text-red
`;
