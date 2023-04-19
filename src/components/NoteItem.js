import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import noteContext from "../context/notes/noteContext"
import userContext from "../context/user/userContext"


// const NoteItem = (props, id) => {
const NoteItem = (props) => {
    const context = useContext(noteContext)
    const usercontext = useContext(userContext)


    // const { _id: userId } = usercontext?.user
    const userId = usercontext?.user?._id   //   ternary vs optional chaining


    const { deleteNote } = context
    const { note, updateNote } = props
    console.log(usercontext);
    console.log(context);
    return (

        <div className='col-md-3'>
            {/* {JSON.stringify(usercontext)} */}
            <div className="card my-3">
                <img src={`http://localhost:5000/${note.images[0]}`} className="card-img-top" alt="Cloud Notebook" />
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description.slice(0,70)} </p>
                    <p className="card-text"><small className="text-muted">  {new Date(note.date).toGMTString()}</small></p>
                    <Link to={`/${note._id}`} className="button6">Read More</Link>


                    {
                        note.user === userId ?

                            <>
                                <i className="fa-sharp fa-solid fa-trash mx-2" onClick={() => {
                                    deleteNote(note._id);
                                    props.showAlert("deleted successfully", "success")
                                }}></i>
                                <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateNote(note) }}></i>
                            </>
                            :
                            <></>
                    }

                </div>
            </div>
        </div>
    )
}

export default NoteItem

