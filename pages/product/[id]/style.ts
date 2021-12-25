import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const Container = tw.main`
  container

  min-h-screen

  bg-black
`;

export const ContentContainer = tw.article`
  p-8

  flex
  flex-col

  rounded-md

  bg-gray-light
`;

export const ProductContainer = tw.div`
  mt-8

  grid
  grid-cols-2
  gap-8
`;

export const ImageContainer = tw.section`
  flex
  justify-center
  items-center

  rounded-md

  bg-white
`;

export const ProductContent = tw.section`
  flex
  flex-col
  justify-between
`;

export const ProductPrice = tw.h3`
  mb-4

  text-6xl
  font-bold
  text-red
`;

export const ProductShipping = tw.p`
  text-lg
  text-gray
`;

export const ProductQuantiy = tw(ProductShipping)`
  mb-2
`;

export const ButtonContainer = tw.div`
  w-full
  h-16

  flex
  justify-center
  items-center

  text-2xl

  rounded-md

  bg-red
`;
