import "css/pages/home.css";
import profile_picture from "imgs/profile-picture.jpg";
import PostItem from "comps/home/PostItem";
import blogsData from "data/blogsData";

export default function HomePage() {
  return (
    <div className="container">
      <img
        className="profile-picture"
        src={profile_picture}
        title="Boris Profile Picture"
      />
      <h2>Recent Posts</h2>
      {blogsData.map((post) => (
        <PostItem key={post.handle} {...post} />
      ))}
    </div>
  );
}
