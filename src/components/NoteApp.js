import React, { useEffect, useReducer } from 'react'
import notesReducer from '../reducers/notesReducer'
import NoteForm from './NoteForm'
import NoteList from './NoteList'
import NotesContext from '../context/NotesContext'
import useMousePosition from '../hooks/useMousePosition'

function NoteApp() {
  const [notes, dispatch] = useReducer(notesReducer, [])
  const position = useMousePosition()

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem('notes'))
    if (notesData) {
      dispatch({ type: 'POPULATE_NOTES', notes: notesData })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  //update mouse position when notes state changes
  useEffect(() => {
    document.title = `X: ${position.x} Y: ${position.y}`
  }, [notes])

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <NoteList />
      <NoteForm />
      <h3>Created at: {position.x} - {position.y}</h3>
    </NotesContext.Provider>
  )
}

export default NoteApp