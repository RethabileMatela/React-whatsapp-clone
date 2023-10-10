import React from "react";
import "./UserProfile.css";

function UserProfile({name, photoURL}) {
  return (
    <div className="user-profile">
      {/* image of user  */}
      <div className="user-image">
        <img src={photoURL} alt="" />
      </div>
      {/* name of user */}
      <div className="user-name">
        <p>{name}</p>
      </div>
    </div>
  );
}

export default UserProfile;
