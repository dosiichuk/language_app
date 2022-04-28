import React from 'react';
import { SearchableWord } from '../../features/SearchableWord/SearchableWord';
import { Word } from '../../../redux/wordSearch';

interface Props {
  title: string;
  wordsArray?: Word['synonyms'] | Word['antonyms'];
}

const Component: React.FC<Props> = ({ title, wordsArray }) => {
  return (
    <div className="content">
      <p className="title is-5">{title}:</p>
      <ul>
        {wordsArray &&
          wordsArray.map((word) => (
            <li key={word}>
              <SearchableWord word={word} />
            </li>
          ))}
      </ul>
      {(!wordsArray || wordsArray.length === 0) && (
        <p>This word has no {title.toLowerCase()}.</p>
      )}
    </div>
  );
};

export { Component as WordList, Component as WordListComponent };
