import React from "react";
import "./styles.css";
import photoProfile from "../../assets/img/photo.jpg";
import { ReactComponent as NotificationIcon } from "../../assets/icons/bell.svg";

function Profile() {
  return (
    <div>
      <div className="account">
        {/* Photo */}
        <section className="account__photo">
          <img src={photoProfile} alt="profile" />
        </section>
        {/* Profile/account info */}
        <section className="account__info">
          <h5>Deyvi Conde</h5>
          <p>deyvi@disoft.io</p>
        </section>
        {/* Notification Center */}
        <section className="notification-center">
          <div className="notification">
            <NotificationIcon />
            <div className="notification__number">1</div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profile;
