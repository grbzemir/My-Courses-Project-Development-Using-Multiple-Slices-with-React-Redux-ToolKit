import { createSlice } from '@reduxjs/toolkit';


const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        description: '',
        cost: 0,
    },
    reducers:
    {
        changeName(state, action) {
            state.name = action.payload;
        },

        changeDescription(state, action) {
            state.name = action.payload;
        },


        changeCost(state, action) {
            state.name = action.payload;
        },
    }

});

export const { changeName } = formSlice.actions;
export const { changeDescription } = formSlice.actions;
export const { changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;


