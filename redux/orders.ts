import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
	name: "orders",
	initialState: {
		orders: []
	},
	reducers: {
		setOrders: (state, actions) => {
			state.orders = actions.payload;
		}
	}
})
export const { setOrders } = ordersSlice.actions;
export default ordersSlice.reducer;