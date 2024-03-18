import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(previousNote => {
            return {
                ...previousNote,
                [name]: value
            }
        });
    };

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });

        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} type="text" value={note.title} name="title" placeholder="Title" />
                <textarea onChange={handleChange} type="text" value={note.content} name="content" placeholder="Take a note..." rows="3" />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )
};

export default CreateArea;
