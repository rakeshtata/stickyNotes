import React,{useEffect}  from 'react'
import {useDispatch} from 'react-redux'
import {fetchNotes} from '../services/appAPI'
import AddNoteForm from  './AddNoteForm'
import NoteList  from './NoteList'

const App = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchNotes())
    },[])

    return(
        <div>
            <div className="off-canvas-wrapper">
                <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
                    <div className="off-canvas position-left reveal-for-large" data-off-canvas data-position="left">
                        <div className="row column">
                            <br />
                            <AddNoteForm />
                        </div>
                    </div>
                    <div className="off-canvas-content" data-off-canvas-content>
                        <NoteList/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;