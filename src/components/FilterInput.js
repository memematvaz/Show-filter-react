import React from 'react';

const FilterInput = (props) => {

  const updateInput = (event) => {
    props.handleInput(event.currentTarget.value);
  }

  return (
    <form className="form">
      <label className="search-text" htmlFor="search-input"><i class="fas fa-search"></i>

</label>
      <input  type="text"
              value={props.inputValue}
              onChange={updateInput}
              placeholder="Search series..."
              className="search-input"        
              />

    </form>

  )
}

export default FilterInput;