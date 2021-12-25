import tw from 'tailwind-styled-components';

export const Container = tw.header`
  w-full
  h-20

  bg-black
`;

export const ContentContainer = tw.div`
  container

  relative

  h-full

  grid
  grid-cols-3
  justify-items-center
  content-center

  text-2xl
  text-gray-light
`;

export const HeaderTitle = tw.h2`
  my-auto

  justify-self-start

  cursor-pointer
`;

export const HeaderNav = tw.nav`
  flex
  items-center
  justify-self-end

  text-base
`;

export const List = tw.div<{ $isHide: boolean }>`
  ${({ $isHide }) => ($isHide ? 'hidden' : 'block')}

  absolute
  right-20
  top-20

  z-50
`;
