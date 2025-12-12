import { useParams, NavLink } from "react-router-dom";
import "css/pages/posts.css";
import blogsData from "data/blogsData";
import { useEffect } from "react";
import { ChevronLeft } from "lucide-react";

export default function BlogPage() {
  const { date, handle } = useParams();
  const post = blogsData.find(
    (post) => post.handle === handle && post.date === date
  );
  useEffect(() => {
    document.body.setAttribute("location", "posts");
  }, []);
  return (
    <div className={"container " + date + handle}>
      <NavLink to="/">
        <ChevronLeft /> Back To Home
      </NavLink>
      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: post?.body_html }}
      />
    </div>
  );
}
