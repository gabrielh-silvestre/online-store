import Link from 'next/link';
import { useState } from 'react';

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
          <HiHeart className="w-8 h-8 mr-8" />
          <HiShoppingCart className="w-8 h-8 mr-8" />
          <HiMenu className="w-8 h-8" onClick={handleListToggle} />
        </HeaderNav>

        <List $isHide={isListHide}>
          <CategoriesList />
        </List>
      </ContentContainer>
    </Container>
  );
}
