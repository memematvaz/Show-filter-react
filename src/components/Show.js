import React from 'react';

const Show = (props) => {
  return (
    <div className="showCard">
      <li className="show" id={props.ShowId}>
        <div className="show-image">
          <img src={props.image} alt={props.title}></img>
        </div>

        <div className="showCard-title">
            <h2>{props.title}</h2>
            <p>{props.showAverage}</p>
            <p>{props.showStatus}</p>
            <p>Más información</p>
          </div>
      </li>
    </div>
  );
}

export default Show;
