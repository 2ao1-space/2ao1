import info from "../../_data/info.json";
import AnimatedLink from "../../_components/AnimatedLink";

export default function Linkscontact({ className }) {
  return (
    <div className={`${className} flex flex-col`}>
      <div className="flex justify-end flex-col items-start">
        <span className="text-sm">Follow me : </span>
        <ul className="flex gap-4 text-sm md:text-base">
          {info.social.slice(1, 4).map((item, index) => (
            <li key={index}>
              <AnimatedLink href={item.path} target="_blank">
                {item.name}
              </AnimatedLink>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <span className="text-sm">Email : </span>
        <p className="text-sm md:text-base">{info.email}</p>
      </div>
    </div>
  );
}
