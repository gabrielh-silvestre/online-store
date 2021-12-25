import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { Input } from './style';

export function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleUserInput = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(value);
  };

  const handleUserTyping = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      router.push(`/search?q=${searchTerm}`);
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
