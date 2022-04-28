import React, { useState, useRef } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { getWordData } from '../../../redux/wordSearch';
import { addToHistory } from '../../../redux/searchHistory';

const Component: React.FC = () => {
  const [searchedWord, setSearchedWord] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(getWordData(searchedWord));
    dispatch(addToHistory(searchedWord));
    setSearchedWord('');
    inputRef.current?.blur();
  };
  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <input
        ref={inputRef}
        className="input is-success"
        type="text"
        placeholder="Type the searched word..."
        value={searchedWord}
        onChange={(event) => setSearchedWord(event.target.value)}
      />
    </form>
  );
};

export { Component as SearchForm, Component as SearchFormComponent };
