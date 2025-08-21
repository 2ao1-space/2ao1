export default function PIResume({info}) {
  return (
    <div className="py-4 flex justify-between items-start">
      <h1 className="text-2xl md:text-3xl font-mainHead text-main">
        {info.name}
      </h1>

      <div className="text-xs md:text-base grid justify-between gap-8">
        <p>{info.role}</p>

        <ul>
          <li>{info.email}</li>
          <li>{info.phone}</li>
          <li>
            {info.location.city}, {info.location.country}
          </li>
        </ul>
      </div>
    </div>
  );
}
