import { useOutletContext } from "react-router-dom";
import { EyeIcon } from "@phosphor-icons/react";

export default function ViewCounter() {
  const { viewCount } = useOutletContext();
  const viewsIconSize = 24;

  return (
    <div className="view-counter">
      <span className="view-logo">
        <EyeIcon size={viewsIconSize} />
      </span>
      <span className="view-count">{viewCount ?? "—"}</span>
    </div>
  );
}
