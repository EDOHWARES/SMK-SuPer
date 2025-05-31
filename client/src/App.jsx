import "./App.css";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hero from "./components/Hero/Hero";
import About from "./pages/About/About";
import { Header } from "./components/Header/Header";
import MapsAndDirections from "./pages/About/MapsAndDirections/MapsAndDirections";
import SchoolHistory from "./pages/About/SchoolHistory/SchoolHistory";
import TeachersAndStaffs from "./pages/Administration/TeachersAndStaffs/TeachersAndStaffs";
import VisionMission from "./pages/About/VissionMission/VissionMission";
import PtaPayment from "./pages/PtaPayment/PtaPayment";
import { MarqueeText } from "./components/MarqueeText/MarqueeText";
import { ExtracurricularActivities } from "./components/ExtracurricularAct/ExtracurricularAct";
import { SchoolStats } from "./components/SchoolStats/SchoolStats";
import { SocialFeeds } from "./components/SocialFeeds/SocialFeeds";
import { AcademicPrograms } from "./components/AcademicProgress/AcademicProgress";
import { Testimonials } from "./components/Testimonials/Testimonials";
// import { CallToAction } from "./components/CallToAction/CallToAction";
import { Footer } from "./components/Footer/Footer";
import RoomBookingSystem from "./pages/RoomBooking/RoomBooking";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import { UpcomingEvents } from "./pages/Home/UpcommingEvent/UpcomingEvents";
import AnnouncementSection from "./pages/Home/LatestAnnouncement/LatestAnnouncement";
import SchoolSlideshow from "./components/Home/ImageSlides/ImageSlides";
import SchoolHighlights from "./pages/News/SchoolHighlights/SchoolHighlights";
import ProgramDocumentation from "./pages/News/ProgramDoc/ProgramDoc";
import OrganizationalChart from "./pages/About/SchoolOrgChart/SchoolOrgChart";
import NationalEducationPhilosophy from "./pages/About/NationalEduPhi/NationalEduPhi";
import SchoolStore from "./pages/SchoolStore/SchoolStore";
import PrincipalPage from "./pages/Administration/Principal/Principal";
import SchoolManagementPage from "./pages/Administration/SchoolManagement/SchoolManagement";
import StudentAffairsPage from "./pages/Administration/StudentAffairs/StudentAffairs";
import CoCurriculumPage from "./pages/Administration/Co-CurriculumManagement/Co-CurriculumManagement";
import CurriculumManagementPage from "./pages/CurriculumManagement/CurriculumManagement";
import SEIPManagement from "./pages/SpecialEduIntegration/SpecialEduIntegration";

function App() {

  // Mock navigation items from the provided data
  const navItems = [
    {
      key: "Home",
      path: "/",
      subNavs: [
        { key: "Latest Announcements", path: "/latest-announcement" },
        { key: "Upcoming Events", path: "/upcoming-events" },
      ],
    },
    {
      key: "About Us",
      path: "/about-us/school-history",
      subNavs: [
        { key: "School History", path: "/about-us/school-history" },
        {
          key: "School Organizational Chart",
          path: "/about-us/school-organizational-chart",
        },
        {
          key: "National Education Philosophy",
          path: "/about-us/national-education-philosophy",
        },
        { key: "School Identity", path: "/about-us/school-identity" },
        { key: "School Song", path: "/about-us/school-song" },
        { key: "Vision & Mission", path: "/about-us/vision&mission" },
      ],
    },
    {
      key: "News",
      path: "/news/school-highlights",
      subNavs: [
        { key: "School Highlights", path: "/news/school-highlights" },
        { key: "Program Documentation", path: "/news/program-documentation" },
      ],
    },
    {
      key: "Administration",
      path: "/administration/principal",
      subNavs: [
        { key: "Principal", path: "/administration/principal" },
        { key: "School Management", path: "/administration/school-management" },
        {
          key: "Teachers & Staff Directory",
          path: "/administration/teachers&staff-directory",
        },
        {
          key: "Student Affairs Unit",
          path: "/administration/student-affairs-unit",
        },
        {
          key: "Curriculum Management",
          path: "/administration/curriculum-management",
        },
        {
          key: "Co-Curriculum Management",
          path: "/administration/co-curriculum-management",
        },
        {
          key: "Special Education Integration Program (SEIP) Management",
          path: "/administration/special-education-integration-program-manaagement",
        },
      ],
    },
    {
      key: "Committee",
      path: "/committee/parent-teacher-association",
      subNavs: [
        {
          key: "Parent-Teacher Association (PTA)",
          path: "/committee/parent-teacher-association",
        },
        {
          key: "Parent and Community Involvement",
          path: "/committee/parent&community-involvement",
        },
        { key: "Bonding & Networking", path: "/committee/bonding&networking" },
        { key: "PTA Payments", path: "/committee/pta-payments" },
        {
          key: "Room Booking",
          path: "/committee/room-booking-system",
        },
      ],
    },
    { key: "Achievements", path: "/achievements" },
    {
      key: "Contact Us",
      path: "/contact-us/school-location",
      subNavs: [
        { key: "School Location", path: "/contact-us/school-location" },
        {
          key: "Office Operating Hours",
          path: "/contact-us/office-operating-hours",
        },
        {
          key: "Official Email Address",
          path: "/contact-us/official-email-address",
        },
        { key: "Phone & Fax Number", path: "/contact-us/phone&fax-number" },
      ],
    },
  ];
  return (
    <section>
      <Toaster position="top-right" reverseOrder={false} />

      <Header navItems={navItems} />
      <Routes>
        {/* TEST ROUTES */}
        <Route path="/committee/room-booking-system" element={<RoomBookingSystem />} />
        <Route path="/school-store" element={<SchoolStore />} /> 

        {/* Main Navigation Routes */}
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <MarqueeText />
              <SchoolSlideshow />
              <main className="flex-grow">
                <ExtracurricularActivities />
                <SchoolStats />
                <SocialFeeds />
                <AcademicPrograms />
                <Testimonials />
              </main>
              <Footer />
            </div>
          }
        />
        <Route path="/latest-announcement" element={<AnnouncementSection />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
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
            <OrganizationalChart />
          }
        />
        <Route
          path="/about-us/national-education-philosophy"
          element={
            <NationalEducationPhilosophy />
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
        <Route path="/about-us/vision&mission" element={<VisionMission />} />

        {/* News SubNavs */}
        <Route
          path="/news/school-highlights"
          element={<SchoolHighlights />}
        />
        <Route
          path="/news/program-documentation"
          element={<ProgramDocumentation />}
        />

        {/* Administration SubNavs */}
        <Route
          path="/administration/principal"
          element={<PrincipalPage />}
        />
        <Route
          path="/administration/school-management"
          element={<SchoolManagementPage />}
        />
        <Route
          path="/administration/teachers&staff-directory"
          element={<TeachersAndStaffs />}
        />
        <Route
          path="/administration/student-affairs-unit"
          element={<StudentAffairsPage />}
        />
        <Route
          path="/administration/curriculum-management"
          element={<CurriculumManagementPage />}
        />
        <Route
          path="/administration/co-curriculum-management"
          element={
            <CoCurriculumPage />
          }
        />
        <Route
          path="/administration/special-education-integration-program-manaagement"
          element={
            <SEIPManagement />
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
        <Route path="/committee/signupaguru" element={<SignIn />} />

        {/* Contact Us SubNavs */}
        <Route
          path="/contact-us/school-location"
          element={<MapsAndDirections />}
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

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Fallback Route */}
        <Route
          path="*"
          element={
            <div>
              <Hero />
              <MarqueeText />
              <main className="flex-grow">
                <ExtracurricularActivities />
                <SchoolStats />
                <SocialFeeds />
                <AcademicPrograms />
                <Testimonials />
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </section>
  );
}

export default App;
