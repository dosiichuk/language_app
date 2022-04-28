import React from 'react';
import Router from 'next/router';
import { useAppDispatch } from '../../../redux/hooks';
import { getWordData } from '../../../redux/wordSearch';
import { addToHistory } from '../../../redux/searchHistory';
import { Word } from '../../../redux/wordSearch';

type Props = {
  word: Word['word'];
};

const Component: React.FC<Props> = ({ word }) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(getWordData(word));
    dispatch(addToHistory(word));
    Router.push('/');
  };
  return (
    <span
      onClick={handleClick}
      className="container is-max-desktop mt-5 mb-3 is-clickable"
    >
      {word}
    </span>
  );
};

export { Component as SearchableWord, Component as SearchableWordComponent };
