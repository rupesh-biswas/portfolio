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
          <span className="text-white">Data </span>
          <span className="text-rose-500">Analyst</span>
        </div>
      </div>

      <p className="text-gray-300">
        I&#39;m a data-driven professional with 5+ years of experience across
        data analytics, solutions engineering, and product management.
        Currently, I serve as a Senior Business Analyst at Soroco, where I
        leverage SQL, Python, and data visualization tools to deliver actionable
        insights that drive business outcomes. My diverse experience has
        equipped me with a strong foundation in data-driven decision-making,
        stakeholder management, and cross-functional collaboration. I&#39;m now
        looking to take the next step in my career in an analytics or product
        management role, where I can combine my analytical expertise with
        user-focused thinking to solve meaningful problems and shape impactful
        products.
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
