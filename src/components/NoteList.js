import React  from 'react'
import Note  from './Note'
import { useSelector } from 'react-redux'

const NoteList = () => {
    const notes = useSelector(state => state.notes)

    return(
        <div className="row small-up-2 medium-up-3 large-up-4">
            {
                notes.map((note, i) => {
                    return (
                        <Note note={note} key={i} />
                    )
                })
            }
        </div>
    )


}

export default NoteList