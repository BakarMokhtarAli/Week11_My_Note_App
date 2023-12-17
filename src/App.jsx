import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// Import all your components here
// Soo Jiido wixii components ah ood u baahantahay

import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import axios from "axios";

function App() {

  const noteSlice = useSelector((state)=> state.noteState.notes)

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || noteSlice
  );
  console.log(notes)
  const [update, setUpdate] = useState({});
  useEffect(()=>{
    axios.post('http://localhost:9000/notes', noteSlice)
    .then(response =>{
      setNotes(response.data);
    })
  },[])

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="bg-blue-600 min-h-screen flex">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl text-white mb-5 mt-5">My Notes</h3>
          {/* Add here all the components you need */}
          {/* Halkaas ku dar components-ka aad u baahan tahay */}
          <NoteForm
            notes={notes}
            setNotes={setNotes}
            update={update}
            setUpdate={setUpdate}
          />
          <NoteList
            notes={notes}
            setNotes={setNotes}
            update={update}
            setUpdate={setUpdate}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
