import React from 'react';

const PersonaItem = (props) => {
  return (
    <div>
      <hr />
      <p>Nombre: {props.name }</p>
      <p>Edad: {props.age }</p>
      <hr />
    </div>
  );
};

export default PersonaItem;
