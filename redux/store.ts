import { configureStore } from "@reduxjs/toolkit";
import languageSlice from './orders';

export default configureStore({
    reducer: {
        language: languageSlice
    }
})