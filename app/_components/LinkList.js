"use client";

import AnimatedLink from "./AnimatedLink";

export default function LinkList({
  items,
  projectsCount = 0,
  width = "",
  className = "",
}) {
  return (
    <ul className={`flex flex-wrap ${width} ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="mr-2">
          <div className="flex h-5 md:h-4 mb-1 justify-start">
            <AnimatedLink
              href={item.link || item.path}
              target={
                ["index", "about", "projects", "contact"].includes(
                  item.name.toLowerCase()
                )
                  ? "_self"
                  : "_blank"
              }
            >
              {item.name.toUpperCase()}
              {item.name.toLowerCase() === "projects" && projectsCount
                ? ` [0${projectsCount}]`
                : ""}
            </AnimatedLink>
            {index < items.length - 1 ? ", " : "."}
          </div>
        </li>
      ))}
    </ul>
  );
}
