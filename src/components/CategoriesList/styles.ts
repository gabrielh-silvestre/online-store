import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const Nav = styled.nav`
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoriesNav = tw(Nav)`
  w-48
  max-h-96

  py-4

  flex
  flex-col

  overflow-y-scroll

  rounded-b-md

  bg-black
`;

export const CategoryItem = tw.a`
  py-2
  px-8


  text-lg
  text-gray-light

  duration-75

  filter
  hover:bg-red
`;
