import React from 'react';

const Show = (props) => {
  return (
    <div className="showCard">
      <li className="show" id={props.ShowId}>
        <div className="show-image" id="front">
          <img src={props.image} alt={props.title}></img>
        </div>

        <div className="showCard-title" id="back">
            <h2>{props.title}</h2>
            <p>{props.showAverage}</p>
            <p>{props.showStatus}</p>
            <p>+ info</p>
          </div>
      </li>
    </div>
  );
}

export default Show;
