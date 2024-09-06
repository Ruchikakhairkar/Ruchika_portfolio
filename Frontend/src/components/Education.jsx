import React from "react";

const Education = () => {
  return (
    <section id="education">
      <h2 className="p-7 text-center underline text-2xl font-semibold  uppercase">
        Education
      </h2>
      <div className="md:gap-10 md:mx-36 mx-7 md:grid grid-cols-2">
        <div>
          <ul className="list-disc">
            <li className="text-2xl my-2">
              <span className="text-red-600 font-semibold">College</span>
              <ul className="pl-5">
                <li className="text-2xl font-semibold">
                  <a href="https://santajicollege.ac.in/">
                    Santaji Mahavidyalaya, Nagpur
                  </a>
                </li>
                <div className="ml-7">
                  <li className="text-xl list-disc">Master of Science</li>
                  <li className="text-xl">Year of Passing - 2023</li>
                  <li className="text-xl list-disc">Bachelor of Science</li>
                  <li className="text-xl">Year of Passing - 2021</li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <ul className="list-disc">
            <li className="text-2xl my-2">
              <span className="text-red-600 font-semibold">Courses</span>
              <ul className="pl-5">
                <li className="text-2xl font-semibold">
                  Full Stack Web Development
                </li>
                <li className="text-xl">
                  <p>
                    Learned Basics of C++, STL, Data Structures, and Algorithms.
                  </p>
                </li>
                <li className="text-xl">
                  <p>
                    Learning Codeigniter MVC pattern (Model View and
                    Controllers), Routes, and rendering views.
                  </p>
                </li>
                <li className="text-xl">
                  <p>Core PHP with CRUD operations and projects.</p>
                </li>
                <div className="md:grid grid-cols-2 mt-3 md:text-start">
                  <div>
                    <div className="flex">
                      <a href="https://www.codeseed.in/">
                        <img
                          src="https://media.licdn.com/dms/image/D4D0BAQEvCGAgX4aPfw/company-logo_200_200/0/1693071783562/codeseed_learning_logo?e=2147483647&v=beta&t=DBgIwApiXVrUf_ewJaI9U7CYjyW-1b0KoOxsZiNozCM"
                          className=" h-8 rounded-full mr-2 "
                          alt="CodeSeed Logo"
                        />
                      </a>
                      <a
                        href="https://www.codeseed.in/"
                        className="text-blue-600 font-semibold text-center"
                      >
                        CODESEED
                      </a>
                    </div>
                    <div className="flex">
                      <i className="fa-solid fa-location-dot text-sm mr-2"></i>
                      <li className="text-sm">Sangolad chowk, Pandharpur</li>
                    </div>
                  </div>
                  <div className="text-sm md:mt-4">
                    <div className="flex items-center">
                      <i className="mr-2 fas fa-envelope"></i>
                      <p>Email - contact@codeseed.in</p>
                    </div>
                    <div className="flex items-center">
                      <i className="mr-2 fa-solid fa-phone"></i>
                      <p>Phone no. - +91 8830231066</p>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
