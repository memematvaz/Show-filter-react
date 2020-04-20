import React from 'react';
import Show from './Show';
import { Link } from 'react-router-dom';

const ShowList = (props) => {

  const {isRunning} = props
  console.log(props)
  return (
     
      <ul className="showList">
        {props.data
      .filter(showObject => showObject.name.toLowerCase().includes((props.inputValue.toLowerCase())))
        .filter(showObject => !isRunning || (isRunning && showObject.status === 'Running'))
        .map(showObject =>
           <Link to={`/show/${showObject.id}`}>
              <Show 
               key = {showObject.id}
               image = {showObject.image.medium}
               title = {showObject.name}
               showAverage = {showObject.rating.average}
               showStatus = {showObject.status}
               id = {showObject.id}
        
              />
           </Link>
            )} 
      </ul>
    );
  
  }
 
export default ShowList; 




