import React from 'react';

export default function Friends({ name, image, balance }) {
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance < 0 && (
        <p className='red'>
          You owe {name} {Math.abs(balance)}$
        </p>
      )}
      {balance > 0 && (
        <p className='green'>
          {name} owes you {Math.abs(balance)}$
        </p>
      )}
      {balance === 0 && <p>You owe {name} are even</p>}

      <button className='button'>Select</button>
    </li>
  );
}
