import React from 'react';
import Show from './Show';
import { Link } from 'react-router-dom';


const ShowList = (props) => {
 // const {dataList,isEvolution} = props
 const {isRunning} = props
  return (
      <ul className="showList">
        {props.dataList
        .filter(showObject => !isRunning || (isRunning && showObject.show.status === 'Running'))
        .map(showObject =>
           <Link to={`/show/${showObject.show.id}`}>
              <Show 
               key = {showObject.show.id}
               image = {showObject.show.image.medium}
               title = {showObject.name}
               showAverage = {showObject.rating.average}
               showStatus = {showObject.status}
        
              />
           </Link>
            )} 
      </ul>
    );
  }


  export default ShowList;