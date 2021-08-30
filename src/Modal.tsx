import React from 'react';

export function Modal(){

    // let modalBg:any = document.getElementById('modal-bg')
    // modalBg.classList.add('bg-active')
    return(
        <div className="modal-bg" id='modal-bg'>
            <div className="modal">
                <h2>Edit the Entry :</h2>
                <label htmlFor="name">Title :</label>
                <input type="text" name="title"></input>
                <label htmlFor="email">Content :</label>
                <input type="text" name="content"></input>
                <button>Done</button>
                <span className="modal-close">x</span>
            </div>
         </div>
    )
}   
//  let modalBg:any = document.querySelector('.modal-bg')
// modalBg.classList.toggle('bg-active')