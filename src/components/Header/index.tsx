import Link from 'next/link';
import React, { useState } from 'react';

import { HiShoppingCart, HiHeart } from 'react-icons/hi';
import { Turn as Hamburger } from 'hamburger-react';
import { CategoriesList } from '../CategoriesList';
import { SearchInput } from '../SearchInput';

import {
  Container,
  ContentContainer,
  HeaderNav,
  HeaderTitle,
  List,
} from './styles';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <ContentContainer>
        <Link href="/" passHref>
          <HeaderTitle>Online Store</HeaderTitle>
        </Link>

        <SearchInput />

        <HeaderNav>
          <Link href="/favorite" passHref>
            <a>
              <HiHeart className="w-8 h-8 mr-8" />
            </a>
          </Link>
          <Link href="/cart" passHref>
            <a>
              <HiShoppingCart className="w-8 h-8 mr-8 cursor-pointer" />
            </a>
          </Link>
          <Hamburger toggle={setIsOpen} toggled={isOpen} direction="left" />
          <List $isOpen={isOpen}>
            <CategoriesList />
          </List>
        </HeaderNav>
      </ContentContainer>
    </Container>
  );
}
