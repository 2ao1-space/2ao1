import HeaderSections from "./HeaderSections";

export default function Status({ status, timeStr, className }) {
  return (
    <HeaderSections title={"status"} className={className}>
      <p id="availability-status" className="uppercase split-text">
        {timeStr ? `${timeStr}, Eg. ${status}` : "Loading..."}
      </p>
    </HeaderSections>
  );
}
