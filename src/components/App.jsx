import React, { useState } from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "../notes.js";
import CreateArea from "./CreateArea.jsx";

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(previousNotes => {
            return [...previousNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes(previousNotes => {
            return previousNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return ( 
        
        <div>
                <Header />
                
                <CreateArea
                    onAdd={addNote}
                 />

                 {notes.map((noteItem, index) => {
                    return <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                     />
                 })};
                 
                <Footer />            
        </div>
    );
};


export default App;
