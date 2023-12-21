import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import ColorPicker from './ColorPicker';

const Note = ({ note, updateNote, deleteNote }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  const [, drag] = useDrag({
    type: 'NOTE',
    item: { id: note.id },
  });

  const handleUpdate = () => {
    updateNote({
      ...note,
      title: editedTitle,
      content: editedContent,
    });
    setEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      deleteNote(note.id);
    }
  };

  return (
    <div
      ref={drag}
      className="note"
      style={{ backgroundColor: note.color }}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <ColorPicker note={note} updateNote={updateNote} />
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Note;
