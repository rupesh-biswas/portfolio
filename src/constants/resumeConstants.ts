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
  description: ["Graduated with first class degree"],
};

export const experience: resumeConstant[] = [
  {
    title: "Soroco India",
    subTitle: "Senior Solutions Engineer",
    startDate: "Jul 2023",
    endDate: "Present",
    description: [
      "Ensured correct access to Power BI datasets across customer environments and delivered insights for 4+ clients.",
      "Created 3+ templatized Power BI files with DAX formulas, helping CS teams obtain preliminary insights within 3 days of deployment. ",
      "Wrote all data load scripts in QlikView using SQL and Qlik scripting to deliver custom insights for a Fortune 500 client.",
      "Built and hosted a React website to demo the company’s Power BI offerings, helping the team to demo effectively.",
      "Created insights for a fortune 500 country by extracting identifiers from the DOM collected across users and mapped them to work sequences to provide insights on how users.",
    ],
  },
  {
    title: "Soroco India",
    subTitle: "Business Analyst",
    startDate: "Jan 2022",
    endDate: "Jul 2023",
    description: [
      "Managed and successfully delivered QuickStart client engagement for 6+ customers.",
      "Developed a serverless app to create Azure DevOps tickets from Datadog alerts.",
      "Conducted custom analysis using Python and SQL on company data to report KPI performance for a Fortune 500 client.",
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
      "Owned the product roadmap and executed all the requirements of the content team to make their processes more streamlined.",
      "Planned, documented, and implemented multiple features on the website like the dropdown menu, website's tech stack changes to react, currency switcher for abroad colleges.",
      "Planned and executed the current Q&A feature on the website from scratch.",
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
      "Create various reports and insights on the website traffic using google analytics. Built the reports in Google data studio offering and was used at leadership level for daily reporting.",
      "Used python to scrape more than 20+ websites to get its data.",
      "Worked with interns to create a notification dashboard for a 5-member team.",
      "Used screaming frog tool to report the various link building errors and website bugs and got them fixed.",
      "Setup Google analytics tracking for Prepp.in domain, a completely new website.",
    ],
  },
];
