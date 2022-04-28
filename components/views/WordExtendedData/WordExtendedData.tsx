import React from 'react';

import { Header } from '../Header/Header';
import { Word } from '../../../redux/wordSearch';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { SearchableWord } from '../../features/SearchableWord/SearchableWord';
import { WordList } from '../WordList/WordList';
import { PronunciationIcon } from '../SoundIcon/PronunciationIcon';

interface Props {
  wordData?: Word;
}

const Component: React.FC<Props> = ({ wordData }) => {
  if (!wordData) return <ProgressBar />;

  return (
    <div className="card">
      <Header>
        Below you can find some details about the word your searched:
      </Header>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-1 has-text-primary">{wordData.word}</p>
            <p className="subtitle is-6">
              {wordData.pronunciation}{' '}
              <PronunciationIcon
                audioSource={wordData.pronunciationAudioSource}
              />
            </p>

            <p className="subtitle is-6">
              <strong>Part of speech: </strong> {wordData.partOfSpeech}
            </p>
          </div>
        </div>

        <div className="content">
          <p className="title is-5">Definition:</p>
          <p className="subtitle is-6 mt-2">
            {wordData.definition.split(' ').map((word) => (
              <span className="px-1" key={word}>
                <SearchableWord word={word} />
              </span>
            ))}
          </p>

          <WordList title="Synomyms" wordsArray={wordData.synonyms} />
          <WordList title="Antonyms" wordsArray={wordData.antonyms} />

          <p className="title is-5">Example in a sentence:</p>
          {wordData.example && <p>{wordData.example}</p>}
          {!wordData.example && (
            <p>There are no examples of sentences with this word</p>
          )}
        </div>
      </div>
    </div>
  );
};

export {
  Component as WordExtendedData,
  Component as WordExtendedDataComponent,
};
