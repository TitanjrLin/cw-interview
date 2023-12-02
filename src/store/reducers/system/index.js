import { handleActions } from 'redux-actions';
import * as types from './types';

const defaultState = {
  isMobile: false,
};

export default handleActions({
  [types.SET_IS_MOBILE]: (state, action) => {
    const isMobile = action.payload;
    return { ...state, isMobile };
  },
}, defaultState);
