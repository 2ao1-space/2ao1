import HeaderSections from "./HeaderSections";
import info from "../../_data/info.json";

export default function NameAndRole({className}) {
  return (
    <HeaderSections title={info.name} className={className}>
      <p className="uppercase split-text">{info.role}.</p>
    </HeaderSections>
  );
}
