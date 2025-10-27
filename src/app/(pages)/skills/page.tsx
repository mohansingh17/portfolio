import React from "react";

const SKILLS = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "JSX",
      "React Router",
      "Hooks",
    ],
  },
  {
    title: "State Management",
    skills: ["Redux Toolkit", "Redux Saga", "React Hook Form"],
  },
  {
    title: "Styling",
    skills: [
      "Tailwind CSS",
      "Styled-components",
      "Bootstrap",
      "Hero UI",
      "Figma-to-Webpage",
    ],
  },
  {
    title: "Tools & IDEs",
    skills: ["VS Code", "Git/GitHub", "Postman", "JIRA", "Chrome DevTools"],
  },
  {
    title: "APIs & Features",
    skills: [
      "REST API Integration",
      "JWT",
      "Session Management",
      "SSR",
      "WebSockets",
    ],
  },
];

export default function Skills() {
  return (
    <div className="container">
      <h2 className="heading">Skills</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((category) => (
          <div
            key={category.title}
            className="border rounded-xl p-6 border-baseColor shadow-baseColor/40 shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-baseColor mb-4">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1 bg-secondary/40 rounded-lg text-sm text-gray-300 transition-all duration-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
