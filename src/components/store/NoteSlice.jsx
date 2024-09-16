import { createSlice } from "@reduxjs/toolkit";


export const NoteSlice = createSlice({
    name: "Notes",
    initialState: {
        notes: [],
    },
    reducers:{
        add(state, action) {
            const addedNote = state.notes.concat(action.payload);
            return{...state, notes:addedNote};
        },
        remove(){},
    }
})

export const { add, remove } = NoteSlice.actions;
export const NoteReducer = NoteSlice.reducer;