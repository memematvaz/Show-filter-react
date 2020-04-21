import React from 'react';

const ShowDetails = (props) => {
  return (
    <div className="wrapper-details container">
      <li className="detailsContainer " id={props.shows.id}>
        <div className="detail-image">
          <img src={props.shows.image.medium} alt={props.shows.name}/>
        </div>
        <div className="detailCard container">
          <h2>{props.shows.name}</h2>
          <p>{props.shows.rating.average}</p>
          <div dangerouslySetInnerHTML={{ __html: props.shows.summary }} />
          <ul className="genres containter"> Genres:
            {props.shows.genres.map((genres,index) => (
              <li key={index}>{genres}</li>
            ))}
          </ul>
        </div>
      </li>
    </div>
  );
}

export default ShowDetails;
