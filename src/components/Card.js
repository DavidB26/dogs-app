import React from 'react';
import Spinner from './Spinner';

const Card = ({dog, loading, updateDog}) => {

  if(loading) return <Spinner />
  return (
   <div className='card' onClick={() => updateDog(dog.breed.id)}>
      <img src={dog.image}  alt="dog"></img>
      <p>
          {dog.breed.name}
      </p>

  </div>
  )
}

export default Card;
