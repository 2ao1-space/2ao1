export default function Pagetitle({ projects }) {
  return (
    <div className="flex justify-between items-center mt-8 md:px-8">
      <h1 className="font-mainHead text-2xl sm:text-6xl md:text-9xl leading-tight">
        ALL WORKS
        <sup className="text-xl sm:text-4xl md:text-8xl text-main">
          [0{projects.length}]
        </sup>
      </h1>
    </div>
  );
}
