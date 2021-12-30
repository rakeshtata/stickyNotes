import { createSlice } from '@reduxjs/toolkit'

const initialState = { notes: [] }

const noteSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addNote(state,action) {
      state.notes = [...state.notes,action.payload.note]
    },
    receiveNotes(state,action) {
      state.notes = [...action.payload]
    },
    removeNote(state, action) {
      state.notes =  [...state.notes].filter(note => note.id !== action.payload)
    },
    clearNotes(state){
      state.notes = []
    }
  },
})

export const { addNote, receiveNotes, removeNote, clearNotes } = noteSlice.actions

export default noteSlice.reducer