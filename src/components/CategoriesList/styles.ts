import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const ContainerNav = styled.section`
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoriesNav = tw(ContainerNav)`
  w-48
  max-h-96

  py-4

  flex
  flex-col

  overflow-y-auto

  rounded-b-md

  bg-black
`;

export const CategoryItem = tw.a<{ $isSelected: boolean }>`
  ${({ $isSelected }) => ($isSelected ? 'text-red' : 'text-gray-light')}

  py-2
  px-8

  text-lg

  duration-75

  hover:bg-red
  hover:text-gray-light
`;
