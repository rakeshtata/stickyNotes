import React  from 'react'
import {useDispatch} from 'react-redux'
import {deleteNote} from '../services/appAPI'

const Note = (props) => {
    const {note} = props
    const dispatch = useDispatch()

    const removeNote = (e,id) =>{
        e.preventDefault();
		dispatch(deleteNote(id))
	}

    return(
        <div className="column">
            <div onDoubleClick={(e) => removeNote(e, note.id)} className="note"><p>{note.text}</p></div>
        </div>
    )


	
}

export default Note