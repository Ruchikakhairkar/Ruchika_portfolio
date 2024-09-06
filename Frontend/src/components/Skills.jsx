import React from "react";

const Skills = () => {
  return (
    <>
      <div id="skills">
        <h2 className="p-7 text-center underline text-2xl font-semibold uppercase">
          Skills
        </h2>
        <div className="md:grid grid-cols-2 md:gap-10 md:mx-40 mx-5 mt-3">
          <div>
            <h2 className="text-3xl font-semibold">
              "A Creative front-end developer and Skilled back-end developer;
              Overall, a complete Full-Stack web developer."
            </h2>
            <p className="text-darkblack mb-5 my-3">
              I am a creative front-end developer with a strong skill set in
              HTML, CSS, JavaScript and React coupled with a deep knowledge of
              user interface design principles. Additionally, as a skilled
              back-end developer, I possess a wealth of experience in crafting
              resilient and expandable web applications. I am proficient with
              frameworks such as Bootstrap and Tailwind, as well as libraries
              like jQuery, and utilizing Node.js as a runtime environment. On
              the back-end, I have expertise in working with PHP and databases
              such as MySQL, API integrations to ensure robust and scalable
              solutions. I am also adept at using tools like Postman for API
              testing and Git for version control. As a complete full-stack
              developer, I am passionate about creating seamless user
              experiences from start to finish, and I thrive in collaborative
              environments where I can contribute my expertise to every aspect
              of the development process.
            </p>
          </div>
          <div className="mt-10 md:mt-0">
            <div className="mb-1 text-base font-medium dark:text-white">
              HTML
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-gray-600 h-2.5 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
            <div className="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">
              CSS
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
            <div className="mb-1 text-base font-medium text-darkpurple dark:text-purple-500">
              TAILWIND
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-darkpurple h-2.5 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
            <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500 mt-3">
              JAVASCRIPT
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-red-600 h-2.5 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
            <div className="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">
              JQUERY
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-indigo-600 h-2.5 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
            <div className="mb-1 text-base font-medium text-blue-500 dark:text-purple-500">
              REACT
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-500 h-2.5 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
            <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500 mt-3">
              PHP
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-green-600 h-2.5 rounded-full"
                style={{ width: "65%" }}
              ></div>
            </div>
            <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">
              MYSQL
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-yellow-400 h-2.5 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
