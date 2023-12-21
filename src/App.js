import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import Header from './Header';
import './styles/styles.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    // Load notes from local storage on component mount
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
    setFilteredNotes(storedNotes);
  }, []);

  useEffect(() => {
    // Save notes to local storage whenever notes change
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes([newNote, ...notes]);
    setFilteredNotes([newNote, ...filteredNotes]);
  };

  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
    setFilteredNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    setFilteredNotes(updatedNotes);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredNotes(notes);
    } else {
      const filtered = notes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          note.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredNotes(filtered);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container">
        <Header handleSearch={handleSearch} />
        <NoteForm addNote={addNote} />
        <NoteList
          notes={filteredNotes}
          updateNote={updateNote}
          deleteNote={deleteNote}
        />
      </div>
    </DndProvider>
  );
};

export default App;
