import tw from 'tailwind-styled-components';

export const Container = tw.header`
  w-full
  h-20

  bg-black
`;

export const ContentContainer = tw.div`
  container

  h-full

  grid
  grid-cols-3
  justify-items-center
  content-center

  text-2xl
  text-gray-light
`;

export const HeaderNav = tw.nav`
  flex
  items-center

  text-base
`;
