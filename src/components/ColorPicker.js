import React, { useState } from 'react';

const ColorPicker = ({ note, updateNote }) => {
  const [isColorPickerVisible, setColorPickerVisible] = useState(false);

  const handleColorChange = (color) => {
    updateNote({
      ...note,
      color,
    });
    setColorPickerVisible(false);
  };

  return (
    <div className="color-picker">
      <div
        className="selected-color"
        style={{ backgroundColor: note.color }}
        onClick={() => setColorPickerVisible(!isColorPickerVisible)}
      ></div>
      {isColorPickerVisible && (
        <div className="color-options">
          <div
            className="color-option"
            style={{ backgroundColor: '#fff' }}
            onClick={() => handleColorChange('#fff')}
          ></div>
          <div
            className="color-option"
            style={{ backgroundColor: '#ffd700' }}
            onClick={() => handleColorChange('#ffd700')}
          ></div>
          <div
            className="color-option"
            style={{ backgroundColor: '#add8e6' }}
            onClick={() => handleColorChange('#add8e6')}
          ></div>
          <div
            className="color-option"
            style={{ backgroundColor: '#00ffff' }}
            onClick={() => handleColorChange('#00ffff')}
          ></div>
          <div
            className="color-option"
            style={{ backgroundColor: '#bfff00' }}
            onClick={() => handleColorChange('#bfff00')}
          ></div>
          <div
            className="color-option"
            style={{ backgroundColor: '#808080' }}
            onClick={() => handleColorChange('#808080')}
          ></div>
          
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
