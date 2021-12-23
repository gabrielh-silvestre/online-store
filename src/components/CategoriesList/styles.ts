import tw from 'tailwind-styled-components';

export const CategoriesNav = tw.nav`
  w-48

  py-4

  flex
  flex-col

  rounded-bl-md

  bg-gray
`;

export const CategoryItem = tw.a`
  py-2
  px-8


  text-lg
  text-gray-light

  duration-75

  filter
  hover:bg-red
  hover:text-black
`;
