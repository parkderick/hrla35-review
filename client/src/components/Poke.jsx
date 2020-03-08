import React from 'react';

const Poke = ({name, img}) => (
  <div>
    <h3>{name}</h3>
    <img src={img}/>
  </div>
)

export default Poke;