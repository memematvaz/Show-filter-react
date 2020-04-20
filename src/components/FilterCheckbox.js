import React from 'react';


const FilterCheckbox = (props) => {

  const updateCheckbox = () => {
    props.handleCheckbox()
  }

  return (
    <form className="form-checkbox">
      <label className="checkbox-text container" htmlFor="label-checkbox"><i class="fas fa-video"></i>Not finished:</label>
      <input onChange={updateCheckbox} 
             type="checkbox" 
             id="status-running" 
             name="status-running" 
             value="status-running" 
             checked={props.isRunning}
             className="checkbox-input" 
             />
    </form>

  )
}

export default FilterCheckbox;




