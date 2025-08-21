import info from "../../_data/info.json";

export default function EducationSection() {
  return (
    <div className="flex gap-4 items-start pb-20">
      <span className="w-1/4">[ 02 ]</span>
      <div className="w-3/4">
        <h3 className="text-sm md:text-2xl font-bold">Education</h3>
        <div className="flex flex-col md:flex-row justify-between items-start py-2 border-b border-primary-900 text-xs md:text-base">
          <div>
            <p>
              <strong className="text-main font-mainHead">
                {info.education.uni}
              </strong>{" "}
              - {info.education.grade}
            </p>
            <p className="text-primary-600">{info.education.field}</p>
          </div>
          <div className="flex justify-start">
            <span>{info.education.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
