import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    fullname: "",
    nationalID: "",
    createdAt: "",
}

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        createAccount: {
            prepare(fullname, nationalID) {
                return {
                    payload: {fullname, nationalID, createdAt: new Date().toISOString()}
                }
            },

            reducer(state, action) {
            state.fullname = action.payload.fullname;
            state.nationalID = action.payload.nationalID;
            state.createdAt = action.payload.createdAt;

        }},
        updateName(state, action) {
           state.fullname = action.payload;
        }
    }
})

export const {createAccount, updateName} = customerSlice.actions

export default customerSlice.reducer;


