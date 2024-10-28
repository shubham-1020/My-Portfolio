function Projects() {
    const projectData = [
      {
        title: "Project One",
        description: "A brief description of the first project.",
        link: "https://github.com/yourusername/project-one",
      },
      {
        title: "Project Two",
        description: "A brief description of the second project.",
        link: "https://github.com/yourusername/project-two",
      },
      {
        title: "Project Three",
        description: "A brief description of the third project.",
        link: "https://github.com/yourusername/project-three",
      },
      {
        title: "Project Two",
        description: "A brief description of the second project.",
        link: "https://github.com/yourusername/project-two",
      },
    ];
  
    return (
      <div id="projects" className="py-12 bg-grey text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text font-semibold tracking-wide uppercase  text-4xl" style={{ fontSize: '2.25rem' }}>
              My Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 shadow-lg rounded-lg p-6 h-64 transform hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-lg font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-400 hover:text-blue-600 font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Projects;
