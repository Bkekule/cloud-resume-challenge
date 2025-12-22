import "css/pages/home.css";
import profile_picture from "imgs/profile-picture.jpg";
import PostItem from "comps/home/PostItem";
import ViewCounter from "comps/home/ViewCounter";
import blogsData from "data/blogsData";
import socialsLinks from "data/socialsLinks";
import {
  FacebookLogoIcon,
  XLogoIcon,
  YoutubeLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

export default function HomePage() {
  const sortedBlogsData = [...blogsData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const socialsIconSize = 32;
  return (
    <div className="container">
      <h1>Welcome To Boris' Personal Website.</h1>
      <ViewCounter />
      <img
        className="profile-picture"
        src={profile_picture}
        title="Boris Profile Picture"
      />
      <div className="references">
        <div className="recent-posts">
          <h3>RECENT POSTS</h3>
          {sortedBlogsData.map((post) => (
            <PostItem key={post.handle} {...post} />
          ))}
        </div>
        <div className="socials">
          <a
            href={socialsLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeLogoIcon size={socialsIconSize} />
          </a>
          <a
            href={socialsLinks.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogoIcon size={socialsIconSize} />
          </a>
          <a href={socialsLinks.x} target="_blank" rel="noopener noreferrer">
            <XLogoIcon size={socialsIconSize} />
          </a>
          <a
            href={socialsLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookLogoIcon size={socialsIconSize} />
          </a>
        </div>
      </div>
    </div>
  );
}
