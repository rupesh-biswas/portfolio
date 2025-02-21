interface talentCard {
  imageUrl: string;
  text: string;
}

const urlPrefix = "./tech-icons/";
export const talentCards: talentCard[] = [
  {
    imageUrl: urlPrefix + "ts.svg",
    text: "TypeScript",
  },
  {
    imageUrl: urlPrefix + "python.svg",
    text: "Python",
  },
  {
    imageUrl: urlPrefix + "sql.svg",
    text: "SQL",
  },
  {
    imageUrl: urlPrefix + "docker.svg",
    text: "Docker",
  },
  {
    imageUrl: urlPrefix + "nextjs.svg",
    text: "Next Js",
  },
  {
    imageUrl: urlPrefix + "react.svg",
    text: "React",
  },
  {
    imageUrl: urlPrefix + "tailwind.svg",
    text: "Tailwind CSS",
  },
  {
    imageUrl: urlPrefix + "flask.svg",
    text: "Flask",
  },
  {
    imageUrl: urlPrefix + "pandas.svg",
    text: "Pandas",
  },
  {
    imageUrl: urlPrefix + "apache-airflow.svg",
    text: "Airflow",
  },
];
