import type { NextPage } from 'next';
import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { selectWordData } from '../redux/wordSearch';

import { WordBasicData } from '../components/views/WordBasicData/WordBasicData';
import { SearchHistory } from '../components/features/SearchHistory/SearchHistory';
import { Container } from '../components/layout/Container/Container';
import { ProgressBar } from '../components/views/ProgressBar/ProgressBar';
import { Header } from '../components/views/Header/Header';
import { SearchForm } from '../components/features/SearchForm/SearchForm';

const Home: NextPage = () => {
  const { data, error, pending } = useAppSelector(selectWordData);

  return (
    <Container>
      <Header>
        Welcome to the <strong>LanguageApp</strong>. <br />
        <strong>Enter a word</strong> in the textbox below to search its
        meaning.
      </Header>

      <SearchForm />
      <SearchHistory />

      {data &&
        data.map((record, index) => (
          <WordBasicData
            key={index}
            word={record.word}
            definition={record.definition}
            id={record.id}
          />
        ))}
      {error && <div>No records found</div>}
      {pending && <ProgressBar />}
    </Container>
  );
};

export default Home;
