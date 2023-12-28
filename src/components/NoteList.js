import React, { useContext } from 'react'
import Note from './Note'
import NotesContext from '../context/NotesContext'

function NoteList() {
  const { notes } = useContext(NotesContext)
  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => (
        <Note key={note.subject} note={note} />
      ))}
    </div>
  )
}

export default NoteList