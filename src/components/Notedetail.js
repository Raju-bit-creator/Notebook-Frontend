import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import noteContext from "../context/notes/noteContext"
import Notes from './Notes';


const Notedetail = () => {


    const context = useContext(noteContext);
    console.log(context);
    const { getHomeNotes } = context;
    const { noteId } = useParams()
    
    // const [note, setNote] = useState();

    const note = context.notes.find(obj => {
        return obj._id === noteId;
      });
      console.log(note);
    


    useEffect(() => {

        if (localStorage.getItem('token')) {
            getHomeNotes()
        }
    }, []);
    return (
        <div className='container my-4'>
            <div className='row'>
            {/* {noteId} */}
            <div className='col-md-6'>
                <h2>{note.title}</h2>
                <p>{note.description}</p>
            </div>
            <div className='col-md-6'>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {
                            note.images?.map((image, index) => {
                                return <div className={`carousel-item ${index == 0 ? "active" : ""}`}>
                                    <img src={`http://localhost:5000/${note.images[0]}`} alt="Note Image" />
                                </div>
                            })
                        }
                        {
                            note.images?.length == 0
                            &&
                            <div className={`carousel-item ${"active"}`}>
                                <img class={`card-img-top ${note.images.length == 0 ? "img-thumbnail" : ""}`} alt="Note image" />

                            </div>
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default Notedetail
