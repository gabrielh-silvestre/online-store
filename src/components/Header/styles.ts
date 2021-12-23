import styled from 'styled-components';
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

const Nav = styled.nav`
  a {
    &:first-of-type {
      margin-right: 2rem;
    }
  }
`;

export const HeaderNav = tw(Nav)`
  flex
  justify-around
  items-center

  text-base
`;
