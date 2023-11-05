import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            console.log(state.cart);
        },
        increaseItemQuantity(state, action) {
            const item = state.cart.find(item => item.id === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreseItemQuantity(state, action) {
            const item = state.cart.find(item => item.id === action.payload);
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;

            if (item.quantity === 0) {
                cartSlice.caseReducers.deleteItem(state, action);
            };
        },
        clearCart(state) {
            state.cart = [];
        },
    },
});

export const {
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreseItemQuantity,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = state => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = state => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);