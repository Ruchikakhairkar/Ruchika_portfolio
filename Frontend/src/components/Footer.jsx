// import React from "react";

// const Footer = () => {
//   return (
//     <section id="footer">
//       <footer className="bg-navbarColor">
//         <div className="p-4 md:grid grid-cols-2 h-auto">
//           <div className="md:mx-36 md:flex justify-center">
//             <div className="md:flex md:justify-center items-center md:space-x-7 mx-10 justify-between flex">
//               {
//                 <a href="whatsapp://send?phone=917038899286&text=Hi%20Ruchika%20Khairkar%2C%20We%27re%20looking%20for%20a%20web%20developer%20to%20join%20our%20team.%20If%20you%27re%20passionate%20about%20building%20awesome%20websites%2C%20we%27d%20love%20to%20hear%20from%20you!">
//                   <i className="text-darkblack fab fa-whatsapp-square text-3xl md:text-2xl"></i>
//                 </a>
//               }
//               <a href="https://www.facebook.com/ruchika.khairkar.7?mibextid=JRoKGi">
//                 <i className="text-darkblack fab fa-facebook text-3xl md:text-2xl"></i>
//               </a>
//               <a href="https://www.instagram.com/ruchika_khairkar/">
//                 <i className="text-darkblack fab fa-instagram text-3xl md:text-2xl"></i>
//               </a>
//               <a href="https://www.linkedin.com/in/ruchika-khairkar-60341b200/">
//                 <i className="text-darkblack fab fa-linkedin text-3xl md:text-2xl"></i>
//               </a>
//             </div>
//           </div>
//           <div className="mt-0 md-mx-48 md:grid justify-center">
//             <div className="grid">
//               <form className="" action="" method="POST">
//                 <div className="p-0 flex items-center">
//                   {/* <input
//                     type="email"
//                     className="p-3 mr-2 rounded-lg"
//                     placeholder="Enter your email"
//                     name="email"
//                   />
//                   <button
//                     type="submit"
//                     className="p-3 text-white bg-darkpurple rounded"
//                   >
//                     Subscribe
//                   </button> */}
//                 </div>
//               </form>
//             </div>
//             <div className="text-sm flex justify-center items-center">
//               <ul className="list-none mt-5">
//                 <li className="flex items-center">
//                   <i className="mr-2 fas fa-map-marker-alt"></i>
//                   <p>Chhatrapati Nagar, Nagpur</p>
//                 </li>
//                 <li className="flex items-center">
//                   <i className="mr-2 fas fa-envelope"></i>
//                   <p>Email - khairkarruchika2@gmail.com</p>
//                 </li>
//                 <li className="flex items-center">
//                   <i className="mr-2 fas fa-phone"></i>
//                   <p>Phone no. - +91-7038899286</p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="md:flex items-center justify-center text-center">
//           <div>Created by</div>
//           <div className="font-bold text-lg"> Ruchika Khairkar </div>
//           <div>All Rights Reserved.</div>
//         </div>
//       </footer>
//     </section>
//   );
// };

// export default Footer;

import React from "react";

const Footer = ({ theme }) => {
  const footerStyle = {
    backgroundColor: theme === "light" ? "#ebfaf7" : "#000000", // Background color for light and dark modes
    color: theme === "light" ? "#000000" : "#ffffff", // Text color for light and dark modes
  };

  // FontAwesome icons' color based on theme
  const iconColor = theme === "light" ? "#000000" : "#ffffff";

  return (
    <section id="footer">
      <footer style={footerStyle}>
        <div className="p-4 md:grid grid-cols-2 h-auto">
          <div className="md:mx-36 md:flex justify-center">
            <div className="md:flex md:justify-center items-center md:space-x-7 mx-10 justify-between flex">
              <a href="whatsapp://send?phone=917038899286&text=Hi%20Ruchika%20Khairkar%2C%20We%27re%20looking%20for%20a%20web%20developer%20to%20join%20our%20team.%20If%20you%27re%20passionate%20about%20building%20awesome%20websites%2C%20we%27d%20love%20to%20hear%20from%20you!">
                <i
                  className="fab fa-whatsapp-square text-3xl md:text-2xl"
                  style={{ color: iconColor }}
                ></i>
              </a>
              <a href="https://www.facebook.com/ruchika.khairkar.7?mibextid=JRoKGi">
                <i
                  className="fab fa-facebook text-3xl md:text-2xl"
                  style={{ color: iconColor }}
                ></i>
              </a>
              <a href="https://www.instagram.com/ruchika_khairkar/">
                <i
                  className="fab fa-instagram text-3xl md:text-2xl"
                  style={{ color: iconColor }}
                ></i>
              </a>
              <a href="https://www.linkedin.com/in/ruchika-khairkar-60341b200/">
                <i
                  className="fab fa-linkedin text-3xl md:text-2xl"
                  style={{ color: iconColor }}
                ></i>
              </a>
            </div>
          </div>
          <div className="mt-0 md-mx-48 md:grid justify-center">
            <div className="grid">
              <form className="" action="" method="POST">
                <div className="p-0 flex items-center">
                  {/* 
                  <input
                    type="email"
                    className="p-3 mr-2 rounded-lg"
                    placeholder="Enter your email"
                    name="email"
                  />
                  <button
                    type="submit"
                    className="p-3 text-white bg-darkpurple rounded"
                  >
                    Subscribe
                  </button> 
                  */}
                </div>
              </form>
            </div>
            <div className="text-sm flex justify-center items-center">
              <ul className="list-none mt-5">
                <li className="flex items-center">
                  <i className="mr-2 fas fa-map-marker-alt"></i>
                  <p>Chhatrapati Nagar, Nagpur</p>
                </li>
                <li className="flex items-center">
                  <i className="mr-2 fas fa-envelope"></i>
                  <p>Email - khairkarruchika2@gmail.com</p>
                </li>
                <li className="flex items-center">
                  <i className="mr-2 fas fa-phone"></i>
                  <p>Phone no. - +91-7038899286</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:flex items-center justify-center text-center">
          <p>Created by </p>
          <p className="font-bold"> Ruchika Khairkar</p>
          <p> | All Rights Reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
