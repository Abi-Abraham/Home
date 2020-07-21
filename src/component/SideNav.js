import React from "react";
import HomeIcon from "../icons/icon-home.svg";
import UserIcon from "../icons/icon-users.svg";
import ListIcon from "../icons/icon-list.svg";
import SettingIcon from "../icons/icon-settings.svg";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="side-nav-main">
      <div className="side-nav-inner-area">
        <div className="logo">
          <div className="logo-inner">
            My <br /> Home
          </div>
        </div>
        <div className="icons">
          <div className="home-icon">
            <Link to="/">
              <img src={HomeIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="icons">
          <div className="user-icon">
            <img src={UserIcon} alt="" />
          </div>
        </div>
        <div className="icons">
          <div className="list-icon">
            <img src={ListIcon} alt="" />
          </div>
        </div>
        <div className="icons">
          <div className="list-icon">
            <img src={SettingIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
