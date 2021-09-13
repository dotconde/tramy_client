import React from "react";
import "./styles.css";
import defaultProfile from "../../assets/img/default-profile.png";
import { ReactComponent as NotificationIcon } from "../../assets/icons/bell.svg";

function Profile({
  fullName = "Deyvi Condezo",
  notificationCount = 0,
  email = "deyvi@tramy.io",
}) {
  return (
    <div>
      <div className="account">
        {/* Photo */}
        <section className="account__photo">
          <img src={defaultProfile} alt="profile" />
        </section>
        {/* Profile/account info */}
        <section className="account__info">
          <h5>{fullName}</h5>
          <p>{email}</p>
        </section>
        {/* Notification Center */}
        {/* <section className="notification-center">
          <div className="notification">
            <NotificationIcon />
            <div className="notification__number">{notificationCount}</div>
          </div>
        </section> */}
      </div>
    </div>
  );
}

export default Profile;
