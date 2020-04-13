import React, { useContext } from 'react';

export default function Card(props) {

  function clickHandle(e) {
  }

  const card = props.info;

  return (
    <div className="card" id={props.text} onClick={clickHandle}>
      <img src={`https://res.cloudinary.com/mhoare/image/upload/${card.id}.png`} width="400" />
      <div className="card-info">
        <h2>{card.company}</h2>
        <h3>{card.type}</h3>
        <p>{card.year}</p>
        <p>{card.description}</p>
      </div>
    </div>
  );
}
