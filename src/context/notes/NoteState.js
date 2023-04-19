import React, { useState } from "react";
import NoteContext from "./noteContext";
import axios from "axios"

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  //get all note
  const getHomeNotes = async () => {
    // api call
    const response = await fetch(`${host}/api/notes/fetchhomenotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },

    });
    const json = await response.json()
    // console.log(json);
    setNotes(json)
  }

  //get all note
  const getNotes = async () => {
    // api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },

    });
    const json = await response.json()
    // console.log(json);
    setNotes(json)
  }


  // const addNote = async (title, description, tag ,image) => {
  //     // TODO: API Call
  //     // API Call 

  //     const response = await fetch(`${host}/api/notes/addnote`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         "auth-token":localStorage.getItem('token')
  //       },
  //       body: JSON.stringify({title, description, tag ,image})
  //     });

  //     const note = await response.json();
  //     setNotes(notes.concat(note))
  //   }
  const addNote = async (title, description, tag, image) => {
    let form_data = new FormData();
    form_data.append('myfile', image)
    form_data.append('title', title)
    form_data.append('description', description)
    form_data.append('tag', tag)

    axios.post(`${host}/api/notes/addnote`, form_data, {
      headers: {
        "auth-token": localStorage.getItem('token')
      }
    })
  }


  const deleteNote = async (id) => {
    //todo api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },

    });
    const json = response.json();
    // console.log(json);
    console.log('deleting the note with id' + id);
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes)
  }
  //update or edit note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    // console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, getNotes, addNote, deleteNote, editNote, getHomeNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState


