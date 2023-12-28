import React, { useContext, useState } from 'react'
import NotesContext from '../context/NotesContext'

function NoteForm() {
  const { dispatch } = useContext(NotesContext)

  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')

  const addNote = (e) => {
    e.preventDefault()
    dispatch({ type: 'ADD_NOTE', subject, description })
    setSubject('')
    setDescription('')
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input placeholder="subject" value={subject} onChange={e => setSubject(e.target.value)} />
        <textarea placeholder="description" value={description} onChange={e => setDescription(e.target.value)} />
        <button>Add Note</button>
      </form>
    </div>
  )
}

export default NoteForm