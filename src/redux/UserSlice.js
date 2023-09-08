import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userId: null,
        token: null,
        mails:[]
    },
    reducers: {
        setUser: (state, action) => {
            state.userId = action.payload.userId;
            state.token = action.payload.token;
        },
        clearUser: (state, action) => {
            state.userId = null;
            state.token = null;
        },
        setEmails: (state, action) => {
            state.mails = action.payload;
        },
    },
});

export const { setUser, clearUser, setEmails } = userSlice.actions;

export default userSlice.reducer;
