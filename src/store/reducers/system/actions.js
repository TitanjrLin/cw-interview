import { createAction } from 'redux-actions';
import * as types from './types';

const setIsMobile = createAction(types.SET_IS_MOBILE);

export default {
  setIsMobile,
};
