import { configureStore } from '@reduxjs/toolkit';

import profileReducer from './profileReducer';
export const store = configureStore({
    reducer: {
        profileReducer,
    }
});
