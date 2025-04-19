import "./App.css";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import MapsAndDirections from "./pages/About/MapsAndDirections/MapsAndDirections";
import SchoolHistory from "./pages/About/SchoolHistory/SchoolHistory";
import BookingForm from "./pages/RoomBooking/RoomBooking";
import Login from "./pages/Auth/Login";
import TeachersAndStaffs from "./pages/Administration/TeachersAndStaffs/TeachersAndStaffs";
import VisionMission from "./pages/About/VissionMission/VissionMission";

function App() {
  return (
    <section>
      <Toaster position="top-right" reverseOrder={false} />

      <Header />
      <Routes>
        {/* TEST ROUTES */}
        <Route
          path="/room-booking"
          element={
            <BookingForm
              userRole={"teacher"}
              token={
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZmRhMmU1NGMzODcwNGI3YThjNThjNiIsImlhdCI6MTc0NDgwOTg1NSwiZXhwIjoxNzQ0ODk2MjU1fQ.i3aJ1iTsPIjV3m0PYdqIJW4o3ar0N2JYE5JIEFchIjQ"
              }
            />
          }
        />
        <Route path="/login" element={<Login />} />

        {/* Main Navigation Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/achievements" element={<div>Achievements Page</div>} />
        <Route path="/contact-us" element={<div>Contact Us Page</div>} />

        {/* Sub-navigation Routes */}
        {/* Home SubNavs */}
        <Route
          path="/latest-announcement"
          element={<div>Latest Announcements Page</div>}
        />
        <Route
          path="/upcoming-events"
          element={<div>Upcoming Events Page</div>}
        />

        {/* About Us SubNavs */}
        <Route path="/about-us/school-history" element={<SchoolHistory />} />
        <Route
          path="/about-us/school-organizational-chart"
          element={<div>School Organizational Chart Page</div>}
        />
        <Route
          path="/about-us/national-education-philosophy"
          element={<div>National Education Philosophy Page</div>}
        />
        <Route
          path="/about-us/school-identity"
          element={<div>School Identity Page</div>}
        />
        <Route
          path="/about-us/school-song"
          element={<div>School Song Page</div>}
        />
        <Route
          path="/about-us/maps&directions"
          element={<MapsAndDirections />}
        />
        <Route path="/about-us/vision&mission" element={<VisionMission />} />

        {/* News SubNavs */}
        <Route
          path="/news/school-highlights"
          element={<div>School Highlights Page</div>}
        />
        <Route
          path="/news/program-documentation"
          element={<div>Program Documentation Page</div>}
        />

        {/* Administration SubNavs */}
        <Route
          path="/administration/principal"
          element={<div>Principal Page</div>}
        />
        <Route
          path="/administration/school-management"
          element={<div>School Management Page</div>}
        />
        <Route
          path="/administration/teachers&staff-directory"
          element={<TeachersAndStaffs />}
        />
        <Route
          path="/administration/student-affairs-unit"
          element={<div>Student Affairs Unit Page</div>}
        />
        <Route
          path="/administration/curriculum-management"
          element={<div>Curriculum Management Page</div>}
        />
        <Route
          path="/administration/co-curriculum-management"
          element={<div>Co-Curriculum Management Page</div>}
        />
        <Route
          path="/administration/special-education-integration-program-manaagement"
          element={
            <div>
              Special Education Integration Program (SEIP) Management Page
            </div>
          }
        />

        {/* Committee SubNavs */}
        <Route
          path="/committee/parent-teacher-association"
          element={<div>Parent-Teacher Association (PTA) Page</div>}
        />
        <Route
          path="/committee/parent&community-involvement"
          element={<div>Parent and Community Involvement Page</div>}
        />
        <Route
          path="/committee/bonding&networking"
          element={<div>Bonding & Networking Page</div>}
        />
        <Route
          path="/committee/pta-payments"
          element={<div>PTA Payments Page</div>}
        />

        {/* Contact Us SubNavs */}
        <Route
          path="/contact-us/school-location"
          element={<div>School Location Page</div>}
        />
        <Route
          path="/contact-us/office-operating-hours"
          element={<div>Office Operating Hours Page</div>}
        />
        <Route
          path="/contact-us/official-email-address"
          element={<div>Official Email Address Page</div>}
        />
        <Route
          path="/contact-us/phone&fax-number"
          element={<div>Phone & Fax Number Page</div>}
        />

        {/* Fallback Route */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </section>
  );
}

export default App;
