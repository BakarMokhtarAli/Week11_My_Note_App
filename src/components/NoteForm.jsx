import React, { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./store/NoteSlice";


function NoteForm({ notes, setNotes, update, setUpdate }) {
  
  const dispatch = useDispatch();
  const noteSlice = useReducer(state => state.noteState.notes)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (update.id) {
      const updateNote = notes.map((note) =>
        note.id === update.id
          ? {
              id: update.id,
              title: e.target.title.value,
              content: e.target.content.value,
            }
          : note
      );
      setNotes(updateNote);
      setUpdate({});
    } else {
      const newNote = {
        id: Math.floor(Math.random() * 10000),
        title: e.target.title.value,
        content: e.target.content.value,
      };
      if (newNote.title) {
        setNotes([...notes, newNote]);
        setUpdate({});
      }
    }
  };

  return (
    <div className="w-3/5 bg-white shadow-sm py-2 px-6 rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          id="title"
          name="title"
          value={update.title || ""}
          maxLength={"25"}
          placeholder="enter note"
          className="my-2 px-2 py-2 rounded-sm outline-none border-solid border-solid border-gray border-2 
         mt-5 rounded-lg rounded-md"
          autoComplete="off"
          onChange={(e) => setUpdate({ ...update, title: e.target.value })}
        />
        <textarea
          as="textarea"
          id="textarea"
          name="content"
          value={update.content || ""}
          className="pt-2 h-40 px-2 pb-5 outline-none border-solid border-solid border-gray border-2 rounded-md"
          onChange={(e) => setUpdate({ ...update, content: e.target.value })}
        />

        <button
          type="Submit"
          className="w-full bg-yellow-400 py-2 rounded-md my-5 font-bold text-center "
          onClick={()=>dispatch(add(notes))}
        >
          {update.id ? "Update Note" : "Add Note"}
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
