import info from "../../_data/info.json";

import HeaderSections from "./HeaderSections";
import LinkList from "../LinkList";

export default function Social({ className, linkStyle }) {
  return (
    <HeaderSections title={"connect"} className={className}>
      <div className="split-text">
        <LinkList items={info.social} className={linkStyle} />
      </div>
    </HeaderSections>
  );
}
