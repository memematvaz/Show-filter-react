import React from 'react';

const FilterInput = (props) => {

  const updateInput = (event) => {
    props.handleInput(event.currentTarget.value);
  }

  return (
    <form className="for,">
      <label htmlFor="search-input">Search:</label>
      <input  type="text"
              value={props.inputValue}
              onChange={updateInput}
              placeholder="Search"         
              />

    </form>

  )
}

export default FilterInput;