import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggle: false,
};

const commonSlice = createSlice({
    name: "CommonSlice",
    initialState,
    reducers: {
        setToggle: (state) => {
            state.toggle = state.toggle ? false : true;
        },
    },
});

export const commonReducer = commonSlice.reducer;
export const { setToggle } = commonSlice.actions;