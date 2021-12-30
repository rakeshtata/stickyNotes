import {addNote,receiveNotes,removeNote} from '../redux/reducer'
import {v4 as uuidv4} from 'uuid'

const postNote = (note)=> async (dispatch) => {
    try {
        note.id = uuidv4()
        let notes  = JSON.parse(localStorage.getItem('notes'));
        if(!notes) {
            notes = []
            localStorage.setItem('notes', JSON.stringify(notes));
        }
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
        dispatch(addNote({note}))
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const fetchNotes = () => async (dispatch) => {
    try {
        let notes = JSON.parse(localStorage.getItem('notes'));
        dispatch(receiveNotes([...notes]))
    } catch(err) {
        dispatch(receiveNotes([]))
    }
}

const deleteNote = (noteId) => async(dispatch) => {
    try {
        let notes = JSON.parse(localStorage.getItem('notes'));
        notes =  [...notes].filter(note => note.id !== noteId)
        localStorage.setItem('notes', JSON.stringify(notes));
        dispatch(removeNote(noteId))
    } catch (e) {
        console.error("Error remove document: ", e);
    }
}

 export {postNote, fetchNotes, deleteNote }   