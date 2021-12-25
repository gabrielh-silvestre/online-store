import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../actions';

import { Input } from './style';

export function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleUserInput = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(value);
  };

  const handleUserTyping = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      dispatch(fetchProducts({ term: searchTerm }));
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
