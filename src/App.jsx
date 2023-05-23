import React, { useEffect, useState } from "react";
// Import all your components here
// Soo Jiido wixii components ah ood u baahantahay

import axios from "axios";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";
import { data } from "autoprefixer";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // get all notes from localhost:9000/notes using axios
    // Dhamaan wixii notes ah kasoo jiido localhost:9000/notes adigoo axios isticmaalaayo
    axios
      .get("http://localhost:9000/notes")
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const createNote = (noteData) => {
    // Make API call to create a note (POST request to localhost:9000/)
    // Halkaas ka samee note cusub adigoo POST request isticmaalaayo localhost:9000/create_note
    axios.post("http://localhost:9000/create_note", noteData).then((note) => {
      setNotes([note.data, ...notes]);
    });
  };

  const deleteNote = (id) => {
    // Make API call to delete a note (DELETE request to localhost:9000/delete_note/:id)
    // Halkaas ka tirtir note adigoo DELETE request isticmaalaayo localhost:9000/delete_note/:id
  };

  // STRETCH GOAL: Implement edit functionality
  // STRETCH GOAL: Isku day inaa edit ku sameyso notes-ka

  return (
    <div className="bg-blue-600 min-h-screen flex">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl text-white mb-5 mt-5">My Notes</h3>
          {/* Add here all the components you need */}
          {/* Halkaas ku dar components-ka aad u baahan tahay */}
          <AddNote createNote={createNote} notes={notes} setNotes={setNotes} />
          <Notes notes={notes} setNotes={setNotes} />
        </div>
      </div>
    </div>
  );
}

export default App;
