import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import shortid from 'shortid';

import { Word } from './reducer';

export const getWordData = createAsyncThunk(
  'search/getWordData',
  async (searchedWord: Word['word']) => {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`
    );
    if (response.data) {
      const formattedResponse = response.data.map((record: any) => ({
        id: shortid.generate(),
        word: record.word,
        definition: record.meanings[0].definitions[0].definition,
        partOfSpeech: record.meanings[0].partOfSpeech,
        synonyms: record.meanings[0].definitions[0].synonyms,
        antonyms: record.meanings[0].definitions[0].antonyms,
        example: record.meanings[0].definitions[0].example,
        pronunciation: record.phonetic,
        pronunciationAudioSource: record.phonetics[0].audio,
      }));

      return formattedResponse;
    } else {
      return [];
    }
  }
);
