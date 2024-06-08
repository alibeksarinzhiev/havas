import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    errors: '',
    status: '',
    filter: {
        category: ''
    }
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setAllProducts: (state, action) => {
            state.data = action.payload;
        },
        setPromProducts: (state, action) => {
            if (state.filter.category === 'promotion') {
                state.filter = {
                    ...state.filter,
                    name: action.payload
                }
            }
        }
    }
})

export const { setAllProducts, setPromProducts } = productsSlice.actions;
export default productsSlice.reducer;
