import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./notes.css";

function Notes(props) {
  const { notes, setNotes } = props;

  const handleDelet = (event) => {
    event.target.parentElement.parentElement.parentElement.remove();
  };

  return (
    <div className="notes">
      {notes.map(
        (note) =>
          note.id &&
          note.content && (
            <div key={note.id} className="note">
              <h1 className="font-bold text-2xl">{note.title}</h1>
              <p>{note.content}</p>
              <div className="flex flex-row mt-2 items-center justify-center">
                <FaEdit className="mr-2 text-2xl text-black-400 cursor-pointer hover:text-black-100" />
                <FaTrash
                  className="text-2xl text-black-400 cursor-pointer hover:text-red-400"
                  onClick={handleDelet}
                />
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default Notes;
