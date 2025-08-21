import info from "../../_data/info.json";
import AnimatedLink from "../../_components/AnimatedLink";

export default function Linkscontact() {
  return (
    <div className="flex py-20 flex-col items-end">
      <div className="flex justify-end flex-col items-start space-y-4">
        <div className="flex justify-end flex-col items-start">
          <span className="text-xs">Follow me : </span>
          <ul className="flex gap-4 text-xs md:text-base">
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
          <span className="text-xs">Email : </span>
          <p className="text-xs md:text-base">{info.email}</p>
        </div>
      </div>
    </div>
  );
}
