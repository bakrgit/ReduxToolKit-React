import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import postsReducer from './posts/postsSlice';
//1-create store file
export const storeApp = configureStore({
    reducer: {
        counterData: counterReducer,
        postsData: postsReducer,
    }
    ,devTools:true
});