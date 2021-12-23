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

export const HeaderNav = tw.nav`
  flex
  items-center

  text-base
`;

export const List = tw.div<{ $isHide: boolean }>`
  ${({ $isHide }) => ($isHide ? 'hidden' : 'block')}

  absolute
  right-24
  top-20

  z-50
`;
