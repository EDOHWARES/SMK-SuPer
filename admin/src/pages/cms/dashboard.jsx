import { useState } from "react";
import {
  Menu,
  X,
  User,
  LogOut,
  Users,
  Calendar,
  FileText,
  Home,
  Info,
} from "lucide-react";

import smk_logo from "../../assets/images/logo.png";

import AboutEditor from "../../components/cms/AboutEditor";
import HeroEditor from "../../components/cms/HeroEditor";
import StaffManager from "../../components/cms/StaffManager";
import AnnouncementManager from "../../components/cms/AnnouncementManager";
import FileUploader from "../../components/cms/FileUploader";
import SidebarNavItem from "../../components/cms/Sidebar";

// Main Dashboard Component
export default function SchoolCMS() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Render the appropriate editor based on active section
  const renderEditor = () => {
    switch (activeSection) {
      case "hero":
        return <HeroEditor />;
      case "about":
        return <AboutEditor />;
      case "staff":
        return <StaffManager />;
      case "announcements":
        return <AnnouncementManager />;
      case "documents":
        return <FileUploader />;
      default:
        return <HeroEditor />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - hidden on mobile */}
      <div
        className={`bg-indigo-800 text-white w-64 fixed inset-y-0 left-0 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out z-30`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-semibold">SMK CMS</h2>
          <p className="text-indigo-200 text-sm">Admin Dashboard</p>
        </div>

        <nav className="mt-6">
          <SidebarNavItem
            icon={<Home size={20} />}
            title="Hero Section"
            active={activeSection === "hero"}
            onClick={() => setActiveSection("hero")}
          />
          <SidebarNavItem
            icon={<Info size={20} />}
            title="About Section"
            active={activeSection === "about"}
            onClick={() => setActiveSection("about")}
          />
          <SidebarNavItem
            icon={<Users size={20} />}
            title="Staff Profiles"
            active={activeSection === "staff"}
            onClick={() => setActiveSection("staff")}
          />
          <SidebarNavItem
            icon={<Calendar size={20} />}
            title="Announcements"
            active={activeSection === "announcements"}
            onClick={() => setActiveSection("announcements")}
          />
          <SidebarNavItem
            icon={<FileText size={20} />}
            title="Documents"
            active={activeSection === "documents"}
            onClick={() => setActiveSection("documents")}
          />
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm z-20 flex items-center justify-between">
          <div className="flex items-center justify-between w-full mr-2 md:mr-4">
            <div className="px-4 py-4 flex justify-between items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="md:hidden font-medium">
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center text-gray-700 hover:text-gray-900">
                  <User size={20} className="mr-1" />
                  <span className="hidden md:inline">Admin</span>
                </button>
                <button className="flex items-center text-gray-700 hover:text-gray-900">
                  <LogOut size={20} className="mr-1" />
                  <span className="hidden md:inline">Logout</span>
                </button>
              </div>
            </div>
            <div>
              <img width={50} src={smk_logo} alt="logo" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}{" "}
                Editor
              </h1>
            </div>

            {renderEditor()}
          </div>
        </main>
      </div>
    </div>
  );
}
