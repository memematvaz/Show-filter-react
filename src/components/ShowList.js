import React from 'react';
import Show from './Show';
//import { Link } from 'react-router-dom';

const ShowList = (props) => {
 // const {dataList,isEvolution} = props
  return (
      <ul className="showList">
        {/* {dataList
          .filter(pokemonObject => !isEvolution || (isEvolution && pokemonObject.evolution !== null))
        .map(pokemonObject =>
           <Link to={`/pokemon/${pokemonObject.id}`}>*/}
              <Show 
                key = {showObject.id}
                title = {showObject.name}
                showUrl = {showObject.url}
                showAverage = {showObject.rating.average}
                showStatus = {showObject.status}
        
              />
            {/* </Link>*/}
            )} 
      </ul>
    );
  }


  export default ShowList;