import { createReducer } from '@reduxjs/toolkit';

import { fetchHistory } from './actions';
import { addToHistory } from './actions';

export type History = {
  history: string[];
};

const initialState: History = {
  history: [],
};

export const searchHistoryReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchHistory, (state, { payload }) => {
      state.history = payload;
    })
    .addCase(addToHistory, (state, { payload }) => {
      if (!state.history.includes(payload)) {
        state.history = [...state.history, payload];
      }
      if (typeof window !== 'undefined') {
        localStorage.setItem('history', JSON.stringify(state.history));
      }
    });
});

export default searchHistoryReducer;
