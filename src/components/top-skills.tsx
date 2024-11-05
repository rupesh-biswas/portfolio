import TopSkillItem from "./subComponents/topSkill-item";

export default function TopSkills() {
  return (
    <section className="mt-14">
      <div className="flex flex-col items-center gap-4">
        <span className="text-gray-400">
          I like to make things easy and fun
        </span>
        <div className="text-4xl">
          <span className="">My </span>
          <span className="text-rose-500">Skills</span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Top fix it according to design */}
        <TopSkillItem
          imageSrc={"./top-skills/globe.svg"}
          imageAlt="Globe Image"
          mainText="WEB DEVELOPMENT"
          subText="Develop modern and mobile-ready website"
        />
        <TopSkillItem
          imageSrc={"./top-skills/code.svg"}
          imageAlt="Code Image"
          mainText="API DESIGN / DEVELOPMENT"
          subText="Develop highly secure, fast and scalable APIs"
        />
        <TopSkillItem
          imageSrc={"./top-skills/chart.svg"}
          imageAlt="Chart Image"
          mainText="DATA ANALYSIS"
          subText="Visualize unstructured data to derive insights for business decision-making"
        />
      </div>
    </section>
  );
}
