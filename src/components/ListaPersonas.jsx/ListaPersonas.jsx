import React from 'react';
import PersonaItem from '../PersonaItem/PersonaItem';

const ListaPersonas = ({ lista }) => {
  return (
    <div>
      {lista.map(({ name, age }) => {
        return <PersonaItem name={name} age={age} />;
      })}
    </div>
  );
};

export default ListaPersonas;
