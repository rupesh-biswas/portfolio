import CheckMarkItem from "./subComponents/checkmark-item";

export default function AboutMe() {
  return (
    <section id="about" className="mt-16 flex flex-col gap-6">
      <h2 className="text-gray-400">About Me</h2>
      <div className="text-5xl">
        <div className="mt-2">
          <span className="text-rose-500">Driven, </span>
          <span className="text-white">innovative</span>
        </div>
        <div className="mt-2">
          <span className="text-white">Software </span>
          <span className="text-rose-500">Engineer</span>
        </div>
      </div>

      <p className="text-gray-300">
        I&#39;m a data-driven professional with 5+ years of experience in data
        analytics, solutions engineering, and product management. Currently, I
        work as a Senior Solutions Engineer at Soroco, where I use SQL, Python,
        and data visualization tools to help clients unlock impactful insights.
        My career journey has given me a strong foundation in software
        development, and I&#39;m now actively seeking opportunities to
        transition into a software engineering role. I&#39;m passionate about
        creating efficient, user-centric solutions and continually advancing my
        technical skills in frameworks like Next.js, React, and TypeScript.
      </p>

      <div className="flex flex-col gap-6 px-6 text-gray-300">
        <CheckMarkItem text="Used Selenium automation to automate and get data from 20+ websites" />

        <CheckMarkItem
          text=" Used SQL, Python and Power BI to analysis and visualize insights
            from GBs of data"
        />

        <CheckMarkItem text="Integration of third party services such as Azure devops, Datadog" />

        <CheckMarkItem
          text=" Created PRDs and worked with engineers to get features released on
            company website"
        />
      </div>
    </section>
  );
}
