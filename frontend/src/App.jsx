// import React from "react"
// import HomePage from "./landing_page/home/HomePage"
// import AboutPage from "./landing_page/about/AboutPage"
// import Signup from "./landing_page/signup/Signup"
// import Navbar from "./landing_page/Navbar"
// import OpenAccount from "./landing_page/OpenAccount"
// import Footer from "./landing_page/Footer"

// function App() {

//   return (
//     <>
//     <Navbar/>
//     <HomePage/>

//     <AboutPage/>
//     <Signup/>
//     <OpenAccount/>
//     <Footer/>
//     </>
//   )
// }

// export default App






import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Signup from "./landing_page/signup/Signup";
import ProductsPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path=" /support" element={<SupportPage />} />

        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;













// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./landing_page/home/HomePage";
// import AboutPage from "./landing_page/about/AboutPage";
// import ProductsPage from "./landing_page/products/ProductsPage";
// import Navbar from "./landing_page/Navbar";
// import Footer from "./landing_page/Footer";
// import Signup from "./landing_page/signup/Signup";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/products" element={<ProductsPage />} />
//         {/* Fallback route for 404 errors */}
//         <Route path="*" element={<div>404 Not Found</div>} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;