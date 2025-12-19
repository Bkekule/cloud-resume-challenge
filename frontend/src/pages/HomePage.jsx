import "css/pages/home.css";
import profile_picture from "imgs/profile-picture.jpg";
import PostItem from "comps/home/PostItem";
import blogsData from "data/blogsData";

export default function HomePage() {
  const sortedBlogsData = [...blogsData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return (
    <div className="container">
      <img
        className="profile-picture"
        src={profile_picture}
        title="Boris Profile Picture"
      />
      <h2>Recent Posts</h2>
      {sortedBlogsData.map((post) => (
        <PostItem key={post.handle} {...post} />
      ))}
    </div>
  );
}
