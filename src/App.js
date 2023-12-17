import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import ContactLeft from "./components/ContactLeft";
import CarAds from "./components/CarAds";
import Parts from "./components/PParts";
import InspectionAd from "./components/InspectionAd";
import Aboutus from "./components/Aboutus";
import CarAdmin from "./components/CarsAdmin";
import Navbar from "./components/Navbar";
import "./App.css";
import Carcomp from "./components/Carcomp";
import Ordercomp from "./components/Ordercomp";
import Inspectioncomp from "./components/Inspectioncomp";
import Civic from "./components/Civic";
import Home from "./components/Home";
import Caraddcomp from "./components/Caraddcomp";
import Logcomp from "./components/Logcomp";
import Prado from "./components/Prado";
import LandCruiser from "./components/Landcruiser";
import SparePartAds from "./components/SparepartAds";
import Carcareproducts from "./components/Carcareproducts";
import Tire from "./components/Tire";
import News from "./components/News";
import PlatinumPackage from "./components/PlatinumPackage";
import SilverPackage from "./components/SilverPackage";
import Checkout from "./components/Checkout";
import Cardelete from "./components/Cardelete";
import Additems from "./components/Additems";
import Settingcomp from "./components/Settingcomp";
import Signup from "./components/Sign";

export const item=createContext()

function App() {
  const [s,vs]=useState(0)
  return (
    <>
    {/* <Signup/> */}
    <item.Provider value={{s,vs}}>
      <Routes>
      <Route path="/admin" element={<Admin />} />
      </Routes>
      <div className="container-fluid">
        <div className="row row1">
          <Navbar />
        </div>
      </div>
      <div>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          
          <Route path="/carcomp" element={<Carcomp />} />
          <Route path="/news" element={<News />} />
          <Route path="/ordercomp" element={<Ordercomp />} />
          <Route path="/inspectioncomp" element={<Inspectioncomp />} />
          <Route path="/contactus" element={<ContactLeft />} />
          <Route path="/view-ad/1" element={<Civic />} />
          <Route path="/view-ad/3" element={<LandCruiser />} />
          <Route path="/view-ad/2" element={<Prado />} />
          <Route path="/view-ad/11" element={<PlatinumPackage />} />
          <Route path="/view-ad/13" element={<SilverPackage />} />
          <Route path="/view-ad/7" element={<SparePartAds />} />
          <Route path="/view-ad/8" element={<Carcareproducts />} />
          <Route path="/view-ad/9" element={<Tire />} />
          <Route path="/settings" element={<Settingcomp />} />
         <Route path="/spare-parts" element={<Parts />} />
          <Route path="/Automobile-ads" element={<CarAds />} />
          <Route path="/Inspection-ad" element={<InspectionAd />} />
          <Route path="/CarAdmin" element={<CarAdmin />} />
          <Route path="/About-us" element={<Aboutus />} />
          <Route path="/Add-car" element={<Caraddcomp />} />
          <Route path="/Delete-car" element={<Cardelete />} />
          <Route path="/logout" element={<Logcomp />} />
          <Route path="/Additems" element={<Additems />} />
          <Route path="/cart" element={<Checkout/>}/>
        </Routes>

      </div>
      </item.Provider>
    </>

  );
}
export default App;
// import React, { createContext, useState } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Admin from "./Admin";
// import ContactLeft from "./components/ContactLeft";
// import CarAds from "./components/CarAds";
// import Parts from "./components/PParts";
// import InspectionAd from "./components/InspectionAd";
// import Aboutus from "./components/Aboutus";
// import CarAdmin from "./components/CarsAdmin";
// import Navbar from "./components/Navbar";
// import "./App.css";
// import Carcomp from "./components/Carcomp";
// import Ordercomp from "./components/Ordercomp";
// import Inspectioncomp from "./components/Inspectioncomp";
// import Civic from "./components/Civic";
// import Home from "./components/Home";
// import Caraddcomp from "./components/Caraddcomp";
// import Logcomp from "./components/Logcomp";
// import Prado from "./components/Prado";
// import LandCruiser from "./components/Landcruiser";
// import SparePartAds from "./components/SparepartAds";
// import Carcareproducts from "./components/Carcareproducts";
// import Tire from "./components/Tire";
// import News from "./components/News";
// import PlatinumPackage from "./components/PlatinumPackage";
// import SilverPackage from "./components/SilverPackage";
// import Checkout from "./components/Checkout";
// import Cardelete from "./components/Cardelete";
// import Additems from "./components/Additems";
// import Settingcomp from "./components/Settingcomp";
// import Signup from "./components/Sign";

// export const item = createContext();

// function App() {
//   const [s, vs] = useState(0);
//   const { pathname } = useLocation();

//   return (
//     <>
//       {/* Render different navbar based on path */}
//       {pathname === "/admin" ? <AdminNavbar /> : <UserNavbar />}

//       <div className="container-fluid">
//         <div className="row row1">
//           <Navbar
//             className={pathname === "/admin" ? "admin-navbar" : "user-navbar"}
//           >
//             {/* Navbar content with conditional links */}
//             <Nav>
//               {/* Show "Home" link for all routes */}
//               <Nav.Link href="/">Home</Nav.Link>

//               {/* Show other links conditionally */}
//               {pathname !== "/admin" && (
//                 <>
//                   <Nav.Link href="/carcomp">Car Comparison</Nav.Link>
//                   <Nav.Link href="/contactus">Contact Us</Nav.Link>
//                 </>
//               )}

//               {/* Admin links only for "/admin" route */}
//               {pathname === "/admin" && (
//                 <>
//                   <Nav.Link href="/CarAdmin">Manage Cars</Nav.Link>
//                   <Nav.Link href="/Additems">Add Items</Nav.Link>
//                 </>
//               )}
//             </Nav>
//           </Navbar>
//         </div>

//         <div>
//           <Routes>
//             <Route path="*" element={<Home />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/admin" element={<Admin />} />
//             <Route path="/carcomp" element={<Carcomp />} />
//             <Route path="/news" element={<News />} />
//             <Route path="/ordercomp" element={<Ordercomp />} />
//             <Route path="/inspectioncomp" element={<Inspectioncomp />} />
//             <Route path="/contactus" element={<ContactLeft />} />
//             <Route path="/view-ad/1" element={<Civic />} />
//             <Route path="/view-ad/3" element={<LandCruiser />} />
//             <Route path="/view-ad/2" element={<Prado />} />
//             <Route path="/view-ad/11" element={<PlatinumPackage />} />
//             <Route path="/view-ad/13" element={<SilverPackage />} />
//             <Route path="/view-ad/7" element={<SparePartAds />} />
//             <Route path="/view-ad/8" element={<Carcareproducts />} />
//             <Route path="/view-ad/9" element={<Tire />} />
//             <Route path="/settings" element={<Settingcomp />} />
//             <Route path="/spare-parts" element={<Parts />} />
//             <Route path="/Automobile-ads" element={<CarAds />} />
//             <Route path="/Inspection-ad" element={<InspectionAd />} />
//             <Route path="/About-us" element={<Aboutus />} />
//             <Route path="/Add-car" element={<Caraddcomp />} />
//             <Route path="/Delete-car" element={<Cardelete />} />
//             <Route path="/logout" element={<Logcomp />} />
//             <Route path="/Additems" element={<Additems />} />
//             <Route path="/cart" element={<Checkout />} />
//           </Routes>
//         </div>
//       </div>
//     </>
//   );
// }
// export default App;
