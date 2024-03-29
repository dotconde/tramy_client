import "./styles.css";
import defaultProfile from "../../assets/img/default-profile.png";
import { getProfile } from "../../services/api/profile";
import { useQuery } from "react-query";
import useToken from "../../hooks/useToken";

function ProfileSummary() {
  const { token } = useToken();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const { data: profile } = useQuery(
    "profile",
    async () => getProfile(config),
    {
      retry: 3,
    }
  );

  return (
    <div>
      <div className="account">
        {/* Photo */}
        <section className="account__photo">
          <img src={profile?.photo_url || defaultProfile} alt="profile" />
        </section>
        {/* Profile/account info */}
        <section className="account__info">
          <h5>{`${profile?.first_name} ${profile?.last_name}`}</h5>
          <p>{profile?.email}</p>
        </section>
      </div>
    </div>
  );
}

export default ProfileSummary;
