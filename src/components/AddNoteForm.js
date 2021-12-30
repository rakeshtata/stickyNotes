import React,{useRef} from 'react'
import {useDispatch} from 'react-redux'
import {postNote} from '../services/appAPI'
import {clearNotes} from '../redux/reducer'


const AddNoteForm = () => {
    const inputRef = useRef()
    const dispatch = useDispatch()
    const onSubmit = (e) => {
		e.preventDefault();
		dispatch(postNote({
			text: inputRef.current.value.trim()
		}))
        inputRef.current.value = ""
	}
    const clearCache = (e) => {
        localStorage.clear();
        dispatch(clearNotes())
        inputRef.current.value = ""
    }

    return(
        <div>
            <h5>Add A Note</h5>
                <div className="row">
                    <div className="large-12 columns">
                        <label>Note Text
                            <input type="text" ref={inputRef} placeholder="Enter Text..." />
                        </label>
                        <button className="button clearButton" onClick={clearCache}>Clear Cache</button>
                        <button className="button" onClick={onSubmit}>Add</button> 
                    </div>
                </div>
        </div>
    )
}

export default AddNoteForm