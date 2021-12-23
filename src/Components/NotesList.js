import '../App.css'
import React from 'react'
import NoteItem from './NoteItem'

function NotesList ({notes, loadNotes, handleRemove}) {
  return(
    <div>
      <button className='button' onClick={loadNotes}>
        <span className="material-icons" style={{fontSize: 30 +'px', color: '#00dd00'}}>autorenew</span>
      </button>
      <div className="notes-list">
        {notes.map(note => <NoteItem key={note.id} note={note} onRemove={handleRemove}/>)}
      </div>
    </div>
  )
}

export default NotesList;