import tw from 'tailwind-styled-components';

export const Container = tw.article`
  min-h-full
  p-8

  grid
  grid-cols-4
  auto-rows-min
  gap-4

  rounded-md
`;

export const FavoriteWarn = tw.h3`
  pt-16

  text-center
  text-4xl
  text-gray

  font-bold
`;
