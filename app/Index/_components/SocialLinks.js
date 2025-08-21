import LinkList from "../../_components/LinkList";

export default function SocialLinks({ social, className }) {
  return (
    <div
      className={`${className} hidden -rotate-90 border-b md:flex justify-between items-center absolute top-[198px] left-[-199px] w-[428px] h-8 text-sm border-primary-900`}
    >
      <LinkList
        items={social}
        className="w-full justify-between items-center "
      />
    </div>
  );
}
