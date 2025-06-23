const TechStack = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-400 rounded-lg shadow-md">
      <div className="space-y-4">
        {/* Frontend */}
        <div className="flex items-start">
          <span className="text-2xl mr-3">🖥️</span>
          <div>
            <h3 className="font-semibold text-gray-800">Frontend</h3>
            <p className="text-gray-600">
              React.js, HTML5, CSS3, Tailwind, Next.js{" "}
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded ml-1">
                Intermediate
              </span>
            </p>
          </div>
        </div>

        {/* Backend */}
        <div className="flex items-start">
          <span className="text-2xl mr-3">🔧</span>
          <div>
            <h3 className="font-semibold text-gray-800">Backend</h3>
            <p className="text-gray-600">
              Node.js, Express.js{" "}
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded ml-1">
                Intermediate
              </span>
            </p>
          </div>
        </div>

        {/* Database */}
        <div className="flex items-start">
          <span className="text-2xl mr-3">🗄️</span>
          <div>
            <h3 className="font-semibold text-gray-800">Database</h3>
            <p className="text-gray-600">MongoDB, Firebase, SQL, Postgres </p>
          </div>
        </div>

        {/* Tools */}
        <div className="flex items-start">
          <span className="text-2xl mr-3">🛠️</span>
          <div>
            <h3 className="font-semibold text-gray-800">Tools</h3>
            <p className="text-gray-600">
              Git, Netlify, VS Code, Prisma, Postman
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
