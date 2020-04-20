import React from 'react';

const ShowDetails = (props) => {
  return (
    <div className="showCard">
      <li className="show" id={props.show.show.id}>
        <div className="show-image">
          <img src={props.show.show.image.medium} alt={props.show.name}/>
        </div>
        <div className="showCard-title">
          <h2>{props.show.name}</h2>
          <p>{props.show.rating.average}</p>
          <div>{props.show.summary}</div>
          <ul className="genres">
            {props.show.show.genres.map((genres,index) => (
              <li key={index}>{genres}</li>
            ))}
          </ul>
        </div>
      </li>
    </div>
  );
}

export default ShowDetails;

