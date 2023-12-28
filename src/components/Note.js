import React, { useContext } from 'react'
import NotesContext from '../context/NotesContext'

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext)


  return (
    <div>
      <h3>{note.subject}</h3>
      <h4>{note.description}</h4>
      <button onClick={() => dispatch({ type: 'REMOVE_NOTE', subject: note.subject })}> X </button>
    </div>
  )
}

export default Note