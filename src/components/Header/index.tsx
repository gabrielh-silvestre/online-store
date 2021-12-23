import { HiShoppingCart, HiHeart } from 'react-icons/hi';

import { Container, ContentContainer, HeaderNav } from './styles';

export function Header() {
  return (
    <Container>
      <ContentContainer>
        <h2>Online Store</h2>

        <label htmlFor="searchInput">
          <input type="text" name="searchInput" id="searchInput" />
        </label>

        <HeaderNav>
          <a href="#"><HiHeart className='w-8 h-8' /></a>
          <a href="#"><HiShoppingCart className='w-8 h-8' /></a>
        </HeaderNav>
      </ContentContainer>
    </Container>
  );
}
