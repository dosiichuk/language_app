import { createReducer } from '@reduxjs/toolkit';
import { getWordData } from './actions';

export type Word = {
  id: string;
  word: string;
  definition: string;
  partOfSpeech: string;
  pronunciation: string;
  pronunciationAudioSource?: string;
  synonyms?: string[];
  antonyms?: string[];
  example?: string;
};

export type WordSearchState = {
  data: Word[];
  pending: boolean;
  error: boolean;
};

const initialState: WordSearchState = {
  data: [],
  pending: false,
  error: false,
};

export const wordSearchReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getWordData.pending, (state) => {
      state.data = [];
      state.error = false;
      state.pending = true;
    })
    .addCase(getWordData.fulfilled, (state, { payload }) => {
      state.pending = false;

      state.error = false;
      state.data = payload;
    })
    .addCase(getWordData.rejected, (state) => {
      state.pending = false;
      state.error = true;
    });
});

export default wordSearchReducer;
