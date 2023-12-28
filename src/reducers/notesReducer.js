import React from 'react'

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_NOTES':
      return action.notes
    case 'ADD_NOTE':
      return [
        ...state,
        { subject: action.subject, description: action.description }
      ]
    case 'REMOVE_NOTE':
      return state.filter(note => note.subject !== action.subject)
    default:
      return state
  }
}
export default notesReducer