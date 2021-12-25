import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { setSearchTerm } from '../../actions';
import { RootState } from '../../store';

import { Input } from './style';

export function SearchInput() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { searchTerm, category } = useSelector(
    ({ search }: RootState) => search
  );

  const handleUserInput = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(value));
  };

  const handleUserTyping = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      router.push(`/search?q=${searchTerm}&category=${category}`);
    }
  };

  return (
    <label htmlFor="searchInput">
      <Input
        type="text"
        name="searchInput"
        id="searchInput"
        value={searchTerm}
        onChange={handleUserInput}
        onKeyUp={handleUserTyping}
      />
    </label>
  );
}
