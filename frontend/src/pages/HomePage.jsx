import "css/pages/home.css";
import profile_picture from "imgs/profile-picture.jpg";

export default function HomePage() {
  return (
    <div className="container">
      <img
        className="profile-picture"
        src={profile_picture}
        title="Boris Profile Picture"
      />
    </div>
  );
}
