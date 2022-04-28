import { createAction } from '@reduxjs/toolkit';
import { History } from './reducer';

export const fetchHistory = createAction<History['history']>(
  'searchHistory/fetchHistory'
);
export const addToHistory = createAction<
  History['history'] extends (infer U)[] ? U : never
>('searchHistory/addToHistory');
