import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav
        className="navbar navbar-expand-lg border-bottom"
        style={{ backgroundColor: "#FFF" }}
      >
        <div className="container p-2">
          <Link className="navbar-brand" to="/">
            {" "}
            {/* Changed href to to */}
            <img
              src="/public/image/logo.svg"
              style={{ width: "25%" }}
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <ul className="navbar-nav mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/signup"
                  >
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/about">
                    {" "}
                    {/* Changed a to Link */}
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/products">
                    {" "}
                    {/* Changed a to Link */}
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/pricing">
                    {" "}
                    {/* Changed a to Link */}
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/support">
                    {" "}
                    {/* Changed a to Link */}
                    Support
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


























// import React from "react";
// import { NavLink } from "react-router-dom"; // Using NavLink for active states

// const Navbar = () => {
//   return (
//     <div className="container-fluid">
//       <nav
//         className="navbar navbar-expand-lg border-bottom"
//         style={{ backgroundColor: "#FFF" }}
//       >
//         <div className="container p-2">
//           <NavLink className="navbar-brand" to="/">
//             <img
//               src="/image/logo.svg" // Vite serves from /public automatically
//               style={{ width: "25%" }}
//               alt="Logo"
//             />
//           </NavLink>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <NavLink
//                   className={({ isActive }) =>
//                     `nav-link ${isActive ? "active fw-bold" : ""}`
//                   }
//                   to="/signup"
//                 >
//                   Signup
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   className={({ isActive }) =>
//                     `nav-link ${isActive ? "active fw-bold" : ""}`
//                   }
//                   to="/about"
//                 >
//                   About
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   className={({ isActive }) =>
//                     `nav-link ${isActive ? "active fw-bold" : ""}`
//                   }
//                   to="/products"
//                 >
//                   Products
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   className={({ isActive }) =>
//                     `nav-link ${isActive ? "active fw-bold" : ""}`
//                   }
//                   to="/pricing"
//                 >
//                   Pricing
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   className={({ isActive }) =>
//                     `nav-link ${isActive ? "active fw-bold" : ""}`
//                   }
//                   to="/support"
//                 >
//                   Support
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
