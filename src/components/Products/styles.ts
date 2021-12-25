import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const ScrollContainer = styled.article`
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Container = tw(ScrollContainer)`
  min-h-full
  max-h-screen
  p-8

  grid
  grid-cols-4
  auto-rows-min
  gap-4

  overflow-y-auto

  rounded-md

  bg-gray-light
`;
