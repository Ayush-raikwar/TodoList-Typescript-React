import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { Navbar } from './Navbar';
import { useState } from 'react';
import { Modal } from './Modal';
const App =() => {

  const [isPopUp, setIsPopUp]= useState(false)

  const [notes, setNotes] = useState([])

  function addNote(note:any){                           
    setNotes((prevNotes:any):any => {
      return(
        [...prevNotes, note]
      )
    })
    
  }

  function deleteNote(id:any){                          
    setNotes((prevNotes) => {
      return  prevNotes.filter((noteItem, index) =>{
          return index!==id;
        });
    })
  }

  function triggerModal(id:any){
    
    return(
      <Modal />
    )
    console.log(notes[id]);
    // let createArea:any = document.getElementById('create-area');
    // createArea.placeholder='Edit id no '+id;

  }


  

  return(
    <div>
      <Header />
      <Modal />
      <Navbar />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem:any,index) => {
        return <Note onEdit={triggerModal} onDelete={deleteNote} title={noteItem.title} content={noteItem.content} id={index} key={index}/>
      })}
      <Footer />
      
    </div>
  )
};

export default App;