import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Gpt = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <header className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-teal-400">John Doe</h1>
        <p className="mt-2 text-lg text-gray-400">React Developer | Laravel | Kotlin | CodeIgniter</p>
      </header>

      <section className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold text-teal-300">Resume</h2>
        <div className="mt-4 bg-gray-800 p-6 rounded-lg shadow-lg">
          <p><strong>Telkom Indonesia</strong> - 5 years in React</p>
          <p><strong>Smartek Sistem Indonesia</strong> - 1 year in Laravel, Kotlin, CodeIgniter</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold text-teal-300">Portfolio</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg">Project 1</div>
          <div className="bg-gray-800 p-4 rounded-lg">Project 2</div>
          <div className="bg-gray-800 p-4 rounded-lg">Project 3</div>
          <div className="bg-gray-800 p-4 rounded-lg">Project 4</div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-10 text-center">
        <h2 className="text-2xl font-semibold text-teal-300">Connect with Me</h2>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-xl text-gray-400 hover:text-teal-300">
            <FaLinkedin />
          </a>
          <a href="#" className="text-xl text-gray-400 hover:text-teal-300">
            <FaGithub />
          </a>
          <a href="#" className="text-xl text-gray-400 hover:text-teal-300">
            <FaTwitter />
          </a>
        </div>
      </section>
    </div>
  );
}
 
export default Gpt;