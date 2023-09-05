import React from 'react';
import Friend from './Friend';

export default function FriendsList({ friendsList, onSelection, selectedFriend }) {
  const friends = friendsList;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} onSelection={onSelection} selectedFriend={selectedFriend}  />
      ))}
    </ul>
  );
}
