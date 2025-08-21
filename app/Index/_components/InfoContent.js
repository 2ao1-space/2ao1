export default function InfoContent({ name, role, city, country }) {
  return (
    <p className="text-base md:text-5xl font-mainHead indent-32 leading-6 md:leading-[4rem]">
      My name is {name}. I'm a <span className="text-main">{role}</span> From in{" "}
      {city} ({country}).
    </p>
  );
}
