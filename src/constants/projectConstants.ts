export interface ProjectDetails {
  imageUrl: string;
  url: string;
  tag: string;
  name: string;
  description: string;
}

export const projects: ProjectDetails[] = [
  {
    imageUrl: "./projects/snippets.svg",
    url: "https://snippets-blush.vercel.app/",
    tag: "Website",
    name: "Snippets",
    description: "A place to share some small piece of code or any random text",
  },
  {
    imageUrl: "./projects/discuss.svg",
    url: "https://discuss-nu-lemon.vercel.app/",
    tag: "Website",
    name: "Discuss",
    description:
      "A site to start a discussion, ask questions, or share your thoughts and get feedback from the community",
  },
  {
    imageUrl: "./projects/js-notebook.svg",
    url: "https://javascript-notebook-green.vercel.app/",
    tag: "Website",
    name: "JavaScript Notebook",
    description:
      "An interactive coding environment. Write Javascript, see it executed, and write comprehensive documentation using markdown.",
  },
];
