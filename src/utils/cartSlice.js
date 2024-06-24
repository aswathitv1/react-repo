import {createSlice} from'@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            state.items.length = 0
            // mutate existing state or return a new state
            // or do this
            // return {items:[]}
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

const cartReducer = cartSlice.reducer

export default cartReducer