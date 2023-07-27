import React from 'react';
import Card from '../Card/Card';

export default function Cards(props) {
  return (
    <>
      {props.users.map((user) => {
        return <Card name={user.name} email={user.email} />;
      })}
    </>
  );
}
