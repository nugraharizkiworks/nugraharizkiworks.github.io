const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-5xl text-indigo-600 font-bold">Rizki Nugraha</h1>
        <p className="text-xl text-gray-700 mt-2">Frontend Developer</p>
      </header>
      <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl text-gray-800 font-semibold mb-4">Resume</h2>
        <p className="text-gray-600 mb-4">Experienced developer with a strong background in web development and a passion for creating efficient and scalable applications.</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Skilled in React for building dynamic user interfaces.</li>
          <li>Experienced with Redux for state management in complex applications.</li>
          <li>Proficient in JavaScript, React, Node.js, and more.</li>
          <li>Experience with RESTful APIs and GraphQL.</li>
          <li>Strong understanding of database design and management.</li>
          <li>5 years at Telkom Indonesia.</li>
          <li>1 year at Smartek Sistem Indonesia.</li>
        </ul>
      </section>
      <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mt-8">
        <h2 className="text-3xl text-gray-800 font-semibold mb-4">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl text-gray-700 font-bold">Project 1</h3>
            <p className="text-gray-600">Description of project 1.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl text-gray-700 font-bold">Project 2</h3>
            <p className="text-gray-600">Description of project 2.</p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </section>
    </div>
  )
}

export default App
