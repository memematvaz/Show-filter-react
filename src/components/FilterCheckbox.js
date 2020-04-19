import React from 'react';

const FilterCheckbox = (props) => {

  const updateCheckbox = () => {
    props.handleCheckbox()
  }

  return (
    <form className="filterCheckbox">
      <label htmlFor="status-running">Running:</label>
      <input onChange={updateCheckbox} type="checkbox" id="status-running" name="status-running" value="status-running" checked={props.isRunning}/>
    </form>

  )
}

export default FilterCheckbox;