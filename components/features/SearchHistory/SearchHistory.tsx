import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectHistory } from '../../../redux/searchHistory/selectors';
import { fetchHistory } from '../../../redux/searchHistory';

import { SearchableWord } from '../SearchableWord/SearchableWord';

const Component: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useAppSelector(selectHistory);
  useEffect(() => {
    if (history.length === 0) {
      const retrievedHistory = localStorage.getItem('history');
      if (retrievedHistory !== null) {
        dispatch(fetchHistory(JSON.parse(retrievedHistory)));
      }
    }
  }, [dispatch, history.length]);
  return (
    <>
      {history.length > 0 && (
        <div className="mb-4">
          <strong className="has-text-primary">You recently searched: </strong>
          {history.map((searchedWord) => (
            <span key={searchedWord} className="px-2">
              <SearchableWord word={searchedWord} />
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export { Component as SearchHistory, Component as SearchHistoryComponent };
