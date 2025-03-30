// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
// import Header from "./components/Header/Header";

// function App() {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about-us/*" element={<About />} />
//         <Route path="/news/*" element={<div>News Page</div>} />
//         <Route path="/administration/*" element={<div>Admin Page</div>} />
//         <Route path="/school-cooperative/*" element={<div>School Cooperative Page</div>} />
//         <Route path="/achievements/*" element={<div>Achievements Page</div>} />
//         <Route path="/contact-us/*" element={<div>Contact Us Page</div>} />
//         <Route path="*" element={<h1>404 Not Found</h1>} />
//       </Routes>
//     </>
//   );
// }

// export default App;



import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Main Navigation Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/achievements" element={<div>Achievements Page</div>} />
        <Route path="/contact-us" element={<div>Contact Us Page</div>} />

        {/* Sub-navigation Routes */}
        {/* Home SubNavs */}
        <Route path="/latest-announcement" element={<div>Latest Announcements Page</div>} />
        <Route path="/upcoming-events" element={<div>Upcoming Events Page</div>} />

        {/* About Us SubNavs */}
        <Route path="/about-us/school-history" element={<div>School History Page</div>} />
        <Route path="/about-us/school-organizational-chart" element={<div>School Organizational Chart Page</div>} />
        <Route path="/about-us/national-education-philosophy" element={<div>National Education Philosophy Page</div>} />
        <Route path="/about-us/school-identity" element={<div>School Identity Page</div>} />
        <Route path="/about-us/school-song" element={<div>School Song Page</div>} />

        {/* News SubNavs */}
        <Route path="/news/school-highlights" element={<div>School Highlights Page</div>} />
        <Route path="/news/program-documentation" element={<div>Program Documentation Page</div>} />

        {/* Administration SubNavs */}
        <Route path="/administration/principal" element={<div>Principal Page</div>} />
        <Route path="/administration/school-management" element={<div>School Management Page</div>} />
        <Route path="/administration/teachers&staff-directory" element={<div>Teachers & Staff Directory Page</div>} />
        <Route path="/administration/student-affairs-unit" element={<div>Student Affairs Unit Page</div>} />
        <Route path="/administration/curriculum-management" element={<div>Curriculum Management Page</div>} />
        <Route path="/administration/co-curriculum-management" element={<div>Co-Curriculum Management Page</div>} />
        <Route path="/administration/special-education-integration-program-manaagement" element={<div>Special Education Integration Program (SEIP) Management Page</div>} />

        {/* School Cooperative SubNavs */}
        <Route path="/school-cooperative/parent-teacher-association" element={<div>Parent-Teacher Association (PTA) Page</div>} />
        <Route path="/school-cooperative/parent&community-involvement" element={<div>Parent and Community Involvement Page</div>} />
        <Route path="/school-cooperative/bonding&networking" element={<div>Bonding & Networking Page</div>} />
        <Route path="/school-cooperative/pta-payments" element={<div>PTA Payments Page</div>} />

        {/* Contact Us SubNavs */}
        <Route path="/contact-us/school-location" element={<div>School Location Page</div>} />
        <Route path="/contact-us/office-operating-hours" element={<div>Office Operating Hours Page</div>} />
        <Route path="/contact-us/official-email-address" element={<div>Official Email Address Page</div>} />
        <Route path="/contact-us/phone&fax-number" element={<div>Phone & Fax Number Page</div>} />

        {/* Fallback Route */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;