import { HiShoppingCart, HiHeart, HiMenu } from 'react-icons/hi';
import { CategoriesList } from '../CategoriesList';

import { Container, ContentContainer, HeaderNav, List } from './styles';

export function Header() {
  return (
    <Container>
      <ContentContainer>
        <h2>Online Store</h2>

        <label htmlFor="searchInput">
          <input type="text" name="searchInput" id="searchInput" />
        </label>

        <HeaderNav>
          <HiHeart className="w-8 h-8 mr-8" />
          <HiShoppingCart className="w-8 h-8 mr-8" />
          <HiMenu className="w-8 h-8" />
        </HeaderNav>

        <List $isHide={false}>
          <CategoriesList />
        </List>
      </ContentContainer>
    </Container>
  );
}
