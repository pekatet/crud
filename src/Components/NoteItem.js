import React from 'react'

function NoteItem ({note, onRemove}) {
  return(
    <div className='note'>
      <div className='note-content'>{note.content}</div>
      <button className='button' onClick={() => onRemove(note.id)}>x</button>
    </div>
  )
}

export default NoteItem