import React from "react";
import userImg from "../images/man-wearing-black-zip-up-hooded-jacket-facing-camera-1080213.jpg";

const User = () => {
  return (
    <div className="user-info">
      <div className="user-img">
        <img src={userImg} alt="" width="100%" />
      </div>
    </div>
  );
};

export default User;
