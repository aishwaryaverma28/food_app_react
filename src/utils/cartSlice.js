import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item?.card?.info?.id === newItem?.card?.info?.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                newItem.quantity = 1;
                state.items.push(newItem);
            }
            state.totalQuantity += 1;
            // state.totalAmount += newItem?.card?.info?.price;
            state.totalAmount += newItem?.card?.modifiedPrice;
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.items.find(item => item?.card?.info?.id === itemId);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item?.card?.info?.id !== itemId);
            } else {
                existingItem.quantity -= 1;
            }
            state.totalQuantity -= 1;
            // state.totalAmount -= existingItem?.card?.info?.price;
            state.totalAmount -=  existingItem?.card?.modifiedPrice;
        },
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
