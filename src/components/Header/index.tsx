import Link from 'next/link';
import React, { useState } from 'react';

import { HiShoppingCart, HiHeart, HiMenu } from 'react-icons/hi';
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
  const [isListHide, setisListHide] = useState(true);

  const handleListToggle = () => {
    setisListHide(!isListHide);
  };

  return (
    <Container>
      <ContentContainer>
        <Link href="/" passHref>
          <HeaderTitle>Online Store</HeaderTitle>
        </Link>

        <SearchInput />

        <HeaderNav>
          <Link href="/favorites" passHref>
            <a>
              <HiHeart className="w-8 h-8 mr-8" />
            </a>
          </Link>
          <Link href="/cart" passHref>
            <a>
              <HiShoppingCart className="w-8 h-8 mr-8 cursor-pointer" />
            </a>
          </Link>
          <HiMenu
            className="w-8 h-8 cursor-pointer"
            onClick={handleListToggle}
          />
        </HeaderNav>

        <List $isHide={isListHide}>
          <CategoriesList />
        </List>
      </ContentContainer>
    </Container>
  );
}
