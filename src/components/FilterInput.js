import React from 'react';

const FilterInput = (props) => {

  const updateInput = (event) => {
    props.handleInput(event.currentTarget.value);
  }

  return (
    <form className="for,">
      <label htmlFor="search-input">Search:</label>
      <input  type="text"
              value={props.value}
              onChange={updateInput}
              inputType="text"
              placeHolder="Search"         
              />
      <button type="button" className="search-button">  <i class="fa fa-search"></i> Search:</button>
    </form>

  )
}

export default FilterInput;