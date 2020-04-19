import React from 'react';

const Show = (props) => {
  return (
    <div className="showCard">
      <li className="show" id={props.show.id}>
        <div className="show-image">
          <img src={props.show.image.medium} alt={props.pokeName}></img>
        </div>

        <div className="showCard-title">
            <h2>{props.show.name}</h2>
            <p>{props.show.rating.average}</p>
            <p>{props.show.status}</p>
            <p>Más información</p>
          </div>
      </li>
    </div>
  );
}

export default Show;
