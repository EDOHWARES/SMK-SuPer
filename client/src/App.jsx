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
import PtaPayment from "./pages/PtaPayment/PtaPayment";

function App() {
  return (
    <section>
      <Toaster position="top-right" reverseOrder={false} />

      <Header />
      <Routes>
        {/* TEST ROUTES */}
        <Route path="/room-booking" element={<BookingForm />} />
        <Route path="/login" element={<Login />} />

        {/* Main Navigation Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route
          path="/achievements"
          element={<div className="mt-30 ml-4">Achievements Page</div>}
        />
        <Route
          path="/contact-us"
          element={<div className="mt-30 ml-4">Contact Us Page</div>}
        />

        {/* Sub-navigation Routes */}
        {/* Home SubNavs */}
        <Route
          path="/latest-announcement"
          element={<div className="mt-30 ml-4">Latest Announcements Page</div>}
        />
        <Route
          path="/upcoming-events"
          element={<div className="mt-30 ml-4">Upcoming Events Page</div>}
        />

        {/* About Us SubNavs */}
        <Route path="/about-us/school-history" element={<SchoolHistory />} />
        <Route
          path="/about-us/school-organizational-chart"
          element={
            <div className="mt-30 ml-4">School Organizational Chart Page</div>
          }
        />
        <Route
          path="/about-us/national-education-philosophy"
          element={
            <div className="mt-30 ml-4">National Education Philosophy Page</div>
          }
        />
        <Route
          path="/about-us/school-identity"
          element={<div className="mt-30 ml-4">School Identity Page</div>}
        />
        <Route
          path="/about-us/school-song"
          element={<div className="mt-30 ml-4">School Song Page</div>}
        />
        <Route
          path="/about-us/maps&directions"
          element={<MapsAndDirections />}
        />
        <Route path="/about-us/vision&mission" element={<VisionMission />} />

        {/* News SubNavs */}
        <Route
          path="/news/school-highlights"
          element={<div className="mt-30 ml-4">School Highlights Page</div>}
        />
        <Route
          path="/news/program-documentation"
          element={<div className="mt-30 ml-4">Program Documentation Page</div>}
        />

        {/* Administration SubNavs */}
        <Route
          path="/administration/principal"
          element={<div className="mt-30 ml-4">Principal Page</div>}
        />
        <Route
          path="/administration/school-management"
          element={<div className="mt-30 ml-4">School Management Page</div>}
        />
        <Route
          path="/administration/teachers&staff-directory"
          element={<TeachersAndStaffs />}
        />
        <Route
          path="/administration/student-affairs-unit"
          element={<div className="mt-30 ml-4">Student Affairs Unit Page</div>}
        />
        <Route
          path="/administration/curriculum-management"
          element={<div className="mt-30 ml-4">Curriculum Management Page</div>}
        />
        <Route
          path="/administration/co-curriculum-management"
          element={
            <div className="mt-30 ml-4">Co-Curriculum Management Page</div>
          }
        />
        <Route
          path="/administration/special-education-integration-program-manaagement"
          element={
            <div className="mt-30 ml-4">
              Special Education Integration Program (SEIP) Management Page
            </div>
          }
        />

        {/* Committee SubNavs */}
        <Route
          path="/committee/parent-teacher-association"
          element={
            <div className="mt-30 ml-4">
              Parent-Teacher Association (PTA) Page
            </div>
          }
        />
        <Route
          path="/committee/parent&community-involvement"
          element={
            <div className="mt-30 ml-4">
              Parent and Community Involvement Page
            </div>
          }
        />
        <Route
          path="/committee/bonding&networking"
          element={<div className="mt-30 ml-4">Bonding & Networking Page</div>}
        />
        <Route path="/committee/pta-payments" element={<PtaPayment />} />

        {/* Contact Us SubNavs */}
        <Route
          path="/contact-us/school-location"
          element={<div className="mt-30 ml-4">School Location Page</div>}
        />
        <Route
          path="/contact-us/office-operating-hours"
          element={
            <div className="mt-30 ml-4">Office Operating Hours Page</div>
          }
        />
        <Route
          path="/contact-us/official-email-address"
          element={
            <div className="mt-30 ml-4">Official Email Address Page</div>
          }
        />
        <Route
          path="/contact-us/phone&fax-number"
          element={<div className="mt-30 ml-4">Phone & Fax Number Page</div>}
        />

        {/* Fallback Route */}
        <Route
          path="*"
          element={<h1 className="mt-30 ml-4">404 Not Found</h1>}
        />
      </Routes>
    </section>
  );
}

export default App;
