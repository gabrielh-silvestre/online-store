import tw from 'tailwind-styled-components';

export const Container = tw.main`
  h-screen

  pt-8

  bg-gray-light
`;

export const ContentContainer = tw.article`
  grid
  grid-cols-3
  gap-8

  rounded-md
`;

export const SectionTitle = tw.h2`
  text-3xl

  col-span-2
`;

export const CupomContainer = tw.div`
  grid
  grid-cols-3
  gap-6
`;

export const CupomInput = tw.input`
  h-12

  px-4

  col-span-2

  border
  border-gray

  rounded-md
`;

export const CartItemsContainer = tw.section`
  p-4

  col-span-2

  rounded-md

  bg-white
`;

export const CartBillContainer = tw.section`
  p-4

  flex
  flex-col
  justify-between

  rounded-md

  bg-white
`;

export const FinalPrice = tw.h3`
  p-8

  font-bold
  text-center
  text-3xl
  text-green

  bg-green
  bg-opacity-25

  rounded-md
`;
