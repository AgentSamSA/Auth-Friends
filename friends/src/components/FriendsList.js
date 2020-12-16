import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  const getFriends = () => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log("friends: ", res);
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFriends();
  }, []);

  if (friends.length === 0) {
    return <h2>Loading friends data...</h2>;
  }

  return (
    <div>
      <h1>My Friends!</h1>
      {friends.length > 0 &&
        friends.map((friend) => {
          return (
            <div key={friend.id}>
              <h4>Name: {friend.name}</h4>
              <p>Age: {friend.age}</p>
              <p>Email: {friend.email}</p>
            </div>
          );
        })}
    </div>
  );
};

export default FriendsList;
