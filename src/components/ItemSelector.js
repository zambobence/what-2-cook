import React, { useState } from "react";
import { ingredientList } from "../IngredientList";
const DatalistArray = ({options, setOptions, handleSearch}) => {
  const [inputValue, setInputValue] = useState("");
  

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddOption = () => {
    if (inputValue.trim() !== "" && !options.includes(inputValue.trim())) {
      setOptions([...options, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDeleteOption = (optionToDelete) => {
    setOptions(options.filter((option) => option !== optionToDelete));
  };

  return (
    <div className="item-selector">
      <label htmlFor="input-field">Select ingredients:</label>
      <input
        className="ingredient-input"
        type="text"
        id="input-field"
        list="options-list"
        value={inputValue}
        onChange={handleInputChange}
      />
      <datalist id="options-list">
        <option>{' '}</option>
        {ingredientList.map((option) => (
          <option key={option.id} value={option.label} />
        ))}
      </datalist>
      <button className="btn" disabled={!inputValue} onClick={handleAddOption}>Add option</button>
      <button className="btn" disabled={options.length < 1} onClick={()=>handleSearch()}>Search</button>
      <ul className="ingredient-list-box flex">
        {options.map((option) => (
          <li className="flex align-center" key={option} onClick={() => handleDeleteOption(option)}>
            {option}           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DatalistArray;