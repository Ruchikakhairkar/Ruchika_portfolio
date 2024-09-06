import React from "react";

const Internship = () => {
  return (
    <>
      <div id="internship">
        <h2 className="text-center mt-3 text-2xl uppercase font-semibold md:m-10 underline">
          Internship
        </h2>
        <div className="md:grid grid-cols-2 md:mx-40 mx-5 mt-5">
          <div>
            <img
              src="https://s3-ap-south-1.amazonaws.com/internshala-uploads-new/google_logo/63b31df4086aa1672682996.png"
              alt=""
              className="w-full"
            />
          </div>
          <div className="justify-self-auto">
            Previously, I worked as a WordPress Developer at Tecnovibes Digital
            Services Pvt. Ltd., where my focus was on software development.
            Specifically, I worked with WordPress, a popular content management
            system, to create and manage websites. My role involved using my
            expertise in web development and WordPress to build dynamic and
            responsive websites that met clients' needs and expectations. I
            enjoyed the challenges of problem-solving and creativity that came
            with developing unique and effective WordPress solutions.
            <div className="md:grid grid-cols-2 mt-3">
              <div>
                <a
                  href="https://tecnovibes.com/"
                  className="text-blue-600 font-semibold"
                >
                  Tecnovibes Digital Services Pvt. Ltd.
                </a>
                <ul className="list-none">
                  <li className="text-sm flex items-center">
                    <i className="fa-solid fa-location-dot mr-1"></i>
                    <span>
                      Sayaji Villa, Near Pari Company, Dhyari, Pune 41104
                    </span>
                  </li>
                </ul>
              </div>
              <div className="text-sm md:mt-4">
                <ul className="list-none">
                  <li className="flex items-center">
                    <i className="mr-2 fas fa-envelope"></i>
                    <p>Email - contact@tecnovibes.com</p>
                  </li>
                  <li className="flex items-center">
                    <i className="mr-2 fa-solid fa-phone"></i>
                    <p>Phone no. - +91- 73784 45561</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Internship;
