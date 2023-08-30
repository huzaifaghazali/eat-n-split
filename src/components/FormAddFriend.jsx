import React from 'react';
import Button from './Button';

export default function FormAddFriend() {
  return (
    <form className='form-add-friend'>
      <label htmlFor=''> 👩🏼‍🤝‍🧑🏻Friend name</label>
      <input type='text' />

      <label htmlFor=''>🖼 Image URL</label>
      <input type='text' />

      <Button>Add</Button>
    </form>
  );
}
