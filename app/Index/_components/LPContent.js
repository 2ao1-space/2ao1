export default function LPContent({ client, category, description }) {
  return (
    <div className="hidden md:flex justify-between items-start gap-4">
      <div className="flex justify-start items-start gap-4">
        {/* the client name */}
        <div className="flex flex-col">
          <span className="overlay-text text-xs text-secondary-400">
            Company
          </span>
          <span className="overlay-text">[ {client} ]</span>
        </div>

        {/* the projet categories */}
        <div className="md:ml-4 md:border-l md:pl-4">
          <span className="overlay-text text-xs text-secondary-400">
            Category
          </span>
          <ul>
            {category.map((t, index) => (
              <li key={index} className="overlay-text">
                [ {t} ]
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* project description */}
      <div className="w-1/3">{description}</div>
    </div>
  );
}
