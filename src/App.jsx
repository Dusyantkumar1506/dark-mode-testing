import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <section className={`${darkMode ? "dark" : ""}`}>
        <div className=" w-full h-screen dark:bg-black flex justify-center items-center">
          <div className="w-1/2 mx-auto ">
            <h1 className=" dark:text-white text-2xl font-bold pb-2 text-black">
              Dusyant Dark mode testing
            </h1>
            <p className="text-lg text-gray-500 pb-3 ">
              Hello Dusyant kumar enable dark mode in React js! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Molestiae dolorum
              doloribus blanditiis, dolores assumenda quisquam sequi,
              repellendus voluptate optio atque fugit neque exercitationem.
              Exercitationem cumque quisquam placeat adipisci nulla molestiae?
            </p>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-sky-500 p-2 text-white rounded-lg"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
