import { ProjectData } from "./Data";

const Projects = () => {
  return (
    <div>
      {/* Projects */}
      <section className="p-4 mt-5 bg-gray-800 border rounded-lg bg-opacity-70">
        <p className="mb-4 text-xl text-white">Recent Projects:</p>
        <div>
          {ProjectData.map((project, id) => (
            <a
              key={id}
              href={project.demo}
              target="_blank"
              className="flex p-4 mb-2 transition bg-gray-900 border rounded-lg hover:bg-gray-700 hover:-translate-y-1"
            >
              {/* Image Section */}
              <div className="flex-shrink-0">
                <img
                  src={project.img}
                  alt={project.description}
                  className="object-cover w-32 h-32 rounded-md"
                />
              </div>
              {/* Content Section */}
              <div className="ml-4">
                <div>
                  <p className="font-medium text-white">{project.title}</p>
                </div>
                <p className="mb-2 text-gray-300">{project.description}</p>
                {/* Links */}
                <div className="space-x-4">
                  <span className="text-blue-500 hover:underline hover:text-blue-400">
                    Live Demo
                  </span>
                  <a
                    href={project.code}
                    className="text-blue-500 hover:underline hover:text-blue-400"
                  >
                    Code
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
