import info from "../../_data/info.json";

import HeaderSections from "./HeaderSections";
import LinkList from "../LinkList";

export default function Sitemap({ className }) {
  return (
    <HeaderSections title={"sitemap"} className={className}>
      <div className="split-text">
        <LinkList items={info.siteMap} projectsCount={info.projects.length} />
      </div>
    </HeaderSections>
  );
}
