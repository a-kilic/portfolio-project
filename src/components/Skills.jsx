const Skills = () => {
  return (
    <section className="p-4 mt-5 bg-gray-800 border rounded-lg bg-opacity-70">
      <p className="mb-4 text-xl text-white">Skills:</p>
      <div className="flex flex-wrap space-x-4">
        <span className="px-4 py-2 mb-2 text-white bg-blue-500 rounded-lg">
          JavaScript
        </span>
        <span className="px-4 py-2 mb-2 text-white bg-blue-500 rounded-lg">
          React
        </span>
        <span className="px-4 py-2 mb-2 text-white bg-blue-500 rounded-lg">
          HTML
        </span>
        <span className="px-4 py-2 mb-2 text-white bg-blue-500 rounded-lg">
          CSS
        </span>
        <span className="px-4 py-2 mb-2 text-white bg-blue-500 rounded-lg">
          RESTful API
        </span>
        <span className="px-4 py-2 mb-2 text-white bg-blue-500 rounded-lg">
          Tailwind
        </span>
        <span className="px-4 py-2 mb-2 text-white bg-blue-500 rounded-lg">
          Bootstrap
        </span>
        {/* Add more skills */}
      </div>
    </section>
  );
};
export default Skills;
