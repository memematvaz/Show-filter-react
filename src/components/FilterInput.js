import React from 'react';

const FilterInput = (props) => {

  const updateInput = () => {
    props.handleInput()
  }

  return (
    <form className="filterInput">
      <label htmlFor="search">Search:</label>
      <input  value={this.props.value}
              onChange={updateInput}
              inputType="text"
              placeHolder="Search"         
              />
    </form>

  )
}

export default FilterInput;