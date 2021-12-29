import tw from 'tailwind-styled-components';

export const BillInfo = tw.p`
  mb-1

  flex
  justify-between
  items-center

  text-sm
  text-black

  border-b
  border-gray
`;

export const BillValue = tw.strong`
  text-base
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
