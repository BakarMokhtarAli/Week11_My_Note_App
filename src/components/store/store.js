import { configureStore } from "@reduxjs/toolkit";
import { NoteReducer } from "./NoteSlice";

export const Store = configureStore({
    reducer:{
        noteState: NoteReducer
      }
})