import React, { useState, useContext } from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = (props) => {
    const context = useContext(noteContext)
    const { addNote } = context

    const [note, setNote] = useState({ title: "", description: "", tag: "" ,image:""})
    const handleSubmit = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag, note.image)
        setNote({ title: "", description: "", tag: "", image:"" })
        props.showAlert("added successfully", "success")
    }
    function handleChange(e) {
        if (e.target.type === "file") {
            setNote({
                ...note,
                [e.target.name]: e.target.files
            })
        } else {
            setNote({
                ...note,
                [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
            })
        }

    }
    const imageUpload=(e)=>{
        console.log(e.target.files[0]);
        setNote({
            ...note,image: e.target.files[0]
        })
    }
    return (
        <div className='container my-3'>
            <h1>add a note</h1>
            <form className='my-3' encType="multipart/form-data">
                <div className="mb-3">
                    <input type="text" className="form-control" id="title" name='title' value={note.title} onChange={handleChange} placeholder="Title" />
                </div>
                <div className="mb-3">
                    <textarea type="text" className="form-control" id="description" name="description" value={note.description} onChange={handleChange}placeholder='Description' rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={handleChange} placeholder='Tag'></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">images</label>
                    <input type="file" multiple className="form-control" id="" onChange={imageUpload} name="myfile" aria-describedby="emailHelp" />
                </div>
                <div className="col-12">
                    <button disabled={note.title.length<5 || note.description.length<5} className="btn btn-primary" type="submit" onClick={handleSubmit}>Post Note</button>
                </div>
            </form>
        </div>
    )
}

export default AddNote
