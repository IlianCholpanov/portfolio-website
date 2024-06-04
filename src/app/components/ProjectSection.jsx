import ProjectCard from "./ProjectCard";

const projectsContent = [
  {
    id: 1,
    title: "Omnifood",
    description:
      "HTML and CSS project with responsive web design. Build following the rules of semantic HTML5 & CCS3.",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    liveDemo: "https://omnifood-ilian.netlify.app/",
    sourceCode: "https://github.com/IlianCholpanov/Omnifood",
  },
  {
    id: 2,
    title: "WorldWise",
    description:
      "Project to save your favourite visited places on the map. It's developed to by practicing advanced React skills, such as React Router, Context API, and advanced patterns.",
    image: "/images/projects/2.png",
    tag: ["All", "Web 2.0"],
    liveDemo: "https://wolrdwise.netlify.app",
    sourceCode: "https://github.com/IlianCholpanov/WorldWise",
  },
  {
    id: 3,
    title: "Fast-React-Pizza",
    description:
      "Simple way of allowing customers to order food from a fast food restourant. Fast-React-Pizza was build using Vite React practicing ReactRouter and Tailwind",
    image: "/images/projects/3.png",
    tag: ["All", "Web 2.0"],
    liveDemo: "",
    sourceCode: "https://github.com/IlianCholpanov/Fast-react-pizza",
  },
];

function ProjectSection() {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsContent.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project.tag}
            liveDemo={project.liveDemo}
            sourceCode={project.sourceCode}
          />
        ))}
      </div>
    </>
  );
}

export default ProjectSection;
