interface resumeConstant {
  title: string;
  subTitle: string;
  startDate: number | string;
  endDate: number | string;
  description: string[];
}

export const education: resumeConstant = {
  title: "National Institute of Technology, Durgapur",
  subTitle: "Bachelor of Technology",
  startDate: 2015,
  endDate: 2019,
  description: ["Graduated with first class degree (CGPA: 7.42)"],
};

export const experience: resumeConstant[] = [
  {
    title: "Soroco India",
    subTitle: "Senior Solutions Engineer (Data)",
    startDate: "Jul 2023",
    endDate: "Present",
    description: [
      "Designed and managed Power BI datasets, ensuring correct data model joins and cardinality across customer environments.",
      "Created 3+ standardized Power BI files with DAX formulas, accelerating insights generation within 3 days of deployment.",
      "Built SQL-based data ingestion pipelines in QlikView, delivering insights for a Fortune 500 client.",
      "Created a React-based website to showcase Power BI capabilities, improving client demo efficiency.",
      "Developed a Python-based extraction pipeline to extract work identifiers from the collected DOM data across users, mapping them to work sequences to generate insights at the unit-of-work level.",
      "Contributed to the creation of multiple sales demo proposals by adding relevant data points and product screenshots to showcase capabilities.",
    ],
  },
  {
    title: "Soroco India",
    subTitle: "Business Analyst",
    startDate: "Jan 2022",
    endDate: "Jul 2023",
    description: [
      "Automated data-driven DevOps workflows by developing a serverless app for Azure DevOps ticketing from Datadog alerts.",
      "Managed and successfully delivered QuickStart client engagement for 6+ customers.",
      "Conducted custom analysis using Python and SQL, optimizing KPI reporting for a Fortune 500 client.",
      "Created competitive analysis slide decks for the sales team to do objection handling effectively.",
      "Integrated the learning management system for the partner and customers to enable them about the product.",
      "Developed guided demo journeys with Reprise for various industries, reducing reliance on the demo portal.",
    ],
  },
  {
    title: "Collegedunia",
    subTitle: "Associate Product Manager",
    startDate: "Nov 2020",
    endDate: "Dec 2021",
    description: [
      "Led data-driven product roadmap execution, enhancing web UI and analytics capabilities.",
      "Planned, documented, and implemented multiple website features, including migration to React, a user path selection navigation menu, a Q&A page, and a currency switcher for abroad colleges.",
      "Launched the current version of Collegedunia mobile app, increasing DAU by 20%.",
      "Executed technical requirements for the WordPress blog.",
    ],
  },
  {
    title: "Collegedunia",
    subTitle: "Data Analyst",
    startDate: "Jul 2019",
    endDate: "Oct 2020",
    description: [
      "Developed traffic analytics reports using Google Analytics and Looker Studio (formerly Google Data Studio) for leadership reporting.",
      "Automated data extraction from 20+ websites using Python, scheduling jobs with cron to fetch updated data at different intervals for competitor analysis and content optimization.",
      "Managed interns to create a notification dashboard for a 15-member team.",
      "Identified and resolved SEO issues, including 404 pages and link-building errors using Screaming Frog for improved search rankings.",
      "Setup Google analytics tracking for Prepp.in domain, a completely new website.",
    ],
  },
];
