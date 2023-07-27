import { useState } from 'react';

export default function SearchBar(props) {
  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleChange}/>
      <button onClick={() => {
        props.onSearch(id)
      }}>Buscar</button>
    </>
  );
}
