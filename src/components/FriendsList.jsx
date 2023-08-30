import React from 'react';
import Friend from './Friend';

export default function FriendsList({ friendsList }) {
  const friends = friendsList;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} {...friend} />
      ))}
    </ul>
  );
}
