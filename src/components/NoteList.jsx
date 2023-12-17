import React, { useEffect, useState } from "react";
import "./notes.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";

function NoteList({ notes, setNotes, update, setUpdate }) {
  // const [delet, setDelet] = useState(
  //   JSON.parse(localStorage.getItem("delete"))
  // );
  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:9000/notes")
    .then(response => {
      setData(response.data);
    })
  },[])
  
  

  const handleEdit = (id) => {
    const selectedNote = notes.find((item) => item.id === id);
    setUpdate(selectedNote);
  };
  const handleDelete = (id) => {
    const delet = notes.filter((item) => item.id !== id);
    setNotes(delet);
  };

  return (
    <div className="notes">
      <h2>notes: {notes.length}</h2>
      {data.map((note) => (
        <div className="note" key={note.id}>
          <h1 className="font-bold text-2xl">{note.title}</h1>
          <p>{note.content}</p>
          <div className="flex flex-row mt-2 items-center justify-center">
            <FaEdit
              onClick={() => handleEdit(note.id)}
              className="mr-2 text-2xl text-black-400 cursor-pointer hover:text-black-100"
            />
            <FaTrash
              onClick={() => handleDelete(note.id)}
              className="text-2xl text-black-400 cursor-pointer hover:text-red-400"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
