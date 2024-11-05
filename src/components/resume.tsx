import { education, experience } from "@/constants/resumeConstants";
import ResumeListItem from "./subComponents/resumeListItem";

export default function ResumeSection() {
  return (
    <section id="resume">
      <div className="flex flex-col items-center gap-4">
        <span className="text-gray-400">Know more about me</span>
        <h3 className="text-5xl">
          <span>My </span>
          <span className="text-rose-500">Resume</span>
        </h3>
      </div>

      <div className="mt-10 grid grid-cols-2 justify-between gap-14">
        {/* Education */}
        <div className="">
          <div className="mb-4 text-center text-2xl font-bold text-white">
            Education
          </div>
          <div>
            <ResumeListItem
              title={education.title}
              subTitle={education.subTitle}
              startDate={education.startDate}
              endDate={education.endDate}
              description={education.description}
              firstItem={true}
            />
          </div>
        </div>

        {/* Experience */}
        <div className="">
          <div className="mb-4 text-center text-2xl font-bold text-white">
            Experience
          </div>
          <div>
            {experience.map((ele, idx) => {
              return (
                <ResumeListItem
                  key={idx}
                  title={ele.title}
                  subTitle={ele.subTitle}
                  startDate={ele.startDate}
                  endDate={ele.endDate}
                  description={ele.description}
                  firstItem={idx === 0}
                />
              );
            })}
          </div>
        </div>

        {/* End of Eperience */}
      </div>
    </section>
  );
}
