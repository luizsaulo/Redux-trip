import { configureStore } from 'redux';

import reducer from './modules/reserve/reducer';

const store = configureStore(reducer);

export default store;