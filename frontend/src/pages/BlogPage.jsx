import { useParams, NavLink } from "react-router-dom";
import "css/pages/posts.css";
import blogsData from "data/blogsData";
import { ChevronLeft } from "lucide-react";
import DOMPurify from "dompurify";

export default function BlogPage() {
  const { date, handle } = useParams();
  const post = blogsData.find(
    (post) => post.handle === handle && post.date === date
  );
  return (
    <div className={"container " + date + handle}>
      <NavLink to="/">
        <ChevronLeft /> Back To Home
      </NavLink>
      <div
        className="markdown"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(post?.body_html),
        }}
      />
    </div>
  );
}
