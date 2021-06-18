import { configureStore } from "@reduxjs/toolkit";
import ordersSlice from './orders';

export default configureStore({
    reducer: {
        orders: ordersSlice
    }
})