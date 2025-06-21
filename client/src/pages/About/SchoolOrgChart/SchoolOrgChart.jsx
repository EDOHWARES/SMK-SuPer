import React from "react";
import {
  Users,
  Mail,
  Phone,
  MapPin,
  Award,
  Calendar,
  ChevronDown,
  ChevronRight,
  Search,
  Filter,
  Grid,
  List,
  User,
  BookOpen,
  Briefcase,
  GraduationCap,
  Heart,
  Shield,
  Building,
} from "lucide-react";

import organizational_chart_img from "../../../assets/images/about/org-chart.jpeg";

const OrganizationalChart = () => {
  // Demo data - easily replaceable with API/database calls
  const organizationData = {
    administration: {
      title: "School Administration",
      icon: Building,
      color: "bg-blue-600",
      members: [
        {
          id: 1,
          name: "Dr. Sarah Johnson",
          position: "Principal",
          department: "Administration",
          email: "s.johnson@school.edu",
          phone: "(555) 123-4567",
          office: "Main Office 101",
          image:
            "https://images.unsplash.com/photo-1494790108755-2616c6106ae1?w=150&h=150&fit=crop&crop=face",
          bio: "Experienced educator with 15+ years in school leadership, focusing on innovative teaching methods and student success.",
          qualifications: [
            "Ed.D. Educational Leadership",
            "M.Ed. Curriculum & Instruction",
            "B.A. Elementary Education",
          ],
          yearsAtSchool: 5,
          specialties: [
            "Educational Leadership",
            "Curriculum Development",
            "Staff Development",
          ],
        },
        {
          id: 2,
          name: "Mr. David Chen",
          position: "Vice Principal",
          department: "Administration",
          email: "d.chen@school.edu",
          phone: "(555) 123-4568",
          office: "Main Office 102",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
          bio: "Former mathematics teacher turned administrator, passionate about student discipline and academic excellence.",
          qualifications: [
            "M.Ed. Educational Administration",
            "B.S. Mathematics Education",
          ],
          yearsAtSchool: 3,
          specialties: [
            "Student Affairs",
            "Academic Standards",
            "Mathematics Education",
          ],
        },
        {
          id: 3,
          name: "Ms. Lisa Rodriguez",
          position: "Assistant Principal",
          department: "Administration",
          email: "l.rodriguez@school.edu",
          phone: "(555) 123-4569",
          office: "Main Office 103",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
          bio: "Dedicated to creating inclusive learning environments and supporting teacher professional development.",
          qualifications: [
            "M.A. Educational Leadership",
            "B.A. English Literature",
          ],
          yearsAtSchool: 2,
          specialties: [
            "Inclusive Education",
            "Teacher Development",
            "Community Relations",
          ],
        },
      ],
    },
    academics: {
      title: "Academic Departments",
      icon: BookOpen,
      color: "bg-green-600",
      members: [
        {
          id: 4,
          name: "Dr. Michael Thompson",
          position: "Academic Director",
          department: "Academics",
          email: "m.thompson@school.edu",
          phone: "(555) 123-4570",
          office: "Academic Wing 201",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
          bio: "Curriculum specialist with expertise in STEM education and innovative teaching methodologies.",
          qualifications: [
            "Ph.D. Curriculum & Instruction",
            "M.S. Biology",
            "B.S. Chemistry",
          ],
          yearsAtSchool: 8,
          specialties: [
            "STEM Education",
            "Curriculum Design",
            "Assessment Strategies",
          ],
        },
        {
          id: 5,
          name: "Ms. Jennifer Park",
          position: "Department Head - Mathematics",
          department: "Mathematics",
          email: "j.park@school.edu",
          phone: "(555) 123-4571",
          office: "Math Wing 301",
          image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
          bio: "Mathematics educator passionate about making complex concepts accessible to all students.",
          qualifications: [
            "M.Ed. Mathematics Education",
            "B.S. Applied Mathematics",
          ],
          yearsAtSchool: 6,
          specialties: ["Advanced Mathematics", "AP Calculus", "Math Olympiad"],
        },
        {
          id: 6,
          name: "Mr. Robert Williams",
          position: "Department Head - Science",
          department: "Science",
          email: "r.williams@school.edu",
          phone: "(555) 123-4572",
          office: "Science Wing 401",
          image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
          bio: "Former research scientist bringing real-world laboratory experience to the classroom.",
          qualifications: ["Ph.D. Chemistry", "M.S. Environmental Science"],
          yearsAtSchool: 4,
          specialties: [
            "Chemistry",
            "Environmental Science",
            "Research Methods",
          ],
        },
      ],
    },
    studentServices: {
      title: "Student Services",
      icon: Heart,
      color: "bg-purple-600",
      members: [
        {
          id: 7,
          name: "Dr. Amanda Foster",
          position: "Director of Student Services",
          department: "Student Services",
          email: "a.foster@school.edu",
          phone: "(555) 123-4573",
          office: "Student Center 501",
          image:
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=face",
          bio: "Licensed counselor dedicated to supporting student mental health and academic success.",
          qualifications: [
            "Ph.D. School Psychology",
            "M.A. Counseling Psychology",
            "B.A. Psychology",
          ],
          yearsAtSchool: 7,
          specialties: [
            "Student Counseling",
            "Crisis Intervention",
            "College Preparation",
          ],
        },
        {
          id: 8,
          name: "Ms. Rachel Green",
          position: "School Counselor",
          department: "Student Services",
          email: "r.green@school.edu",
          phone: "(555) 123-4574",
          office: "Student Center 502",
          image:
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
          bio: "Passionate about helping students navigate academic and personal challenges.",
          qualifications: ["M.Ed. School Counseling", "B.A. Social Work"],
          yearsAtSchool: 3,
          specialties: [
            "Academic Planning",
            "Career Guidance",
            "Social-Emotional Learning",
          ],
        },
      ],
    },
    operations: {
      title: "Operations & Support",
      icon: Briefcase,
      color: "bg-orange-600",
      members: [
        {
          id: 9,
          name: "Mr. James Miller",
          position: "Operations Manager",
          department: "Operations",
          email: "j.miller@school.edu",
          phone: "(555) 123-4575",
          office: "Administrative Building 601",
          image:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
          bio: "Facilities management expert ensuring safe and efficient school operations.",
          qualifications: [
            "M.B.A. Operations Management",
            "B.S. Facilities Management",
          ],
          yearsAtSchool: 5,
          specialties: [
            "Facility Management",
            "Safety Protocols",
            "Resource Planning",
          ],
        },
        {
          id: 10,
          name: "Ms. Patricia Davis",
          position: "IT Director",
          department: "Technology",
          email: "p.davis@school.edu",
          phone: "(555) 123-4576",
          office: "Technology Center 701",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
          bio: "Technology leader implementing innovative solutions for modern education.",
          qualifications: [
            "M.S. Information Technology",
            "B.S. Computer Science",
          ],
          yearsAtSchool: 4,
          specialties: [
            "Educational Technology",
            "Network Security",
            "Digital Learning",
          ],
        },
      ],
    },
  };

  const [selectedDepartment, setSelectedDepartment] = React.useState("all");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [viewMode, setViewMode] = React.useState("grid");
  const [selectedMember, setSelectedMember] = React.useState(null);
  const [expandedDepartments, setExpandedDepartments] = React.useState(
    new Set(["administration"])
  );

  // Flatten all members for filtering
  const allMembers = Object.values(organizationData).flatMap(
    (dept) => dept.members
  );

  const filteredMembers = allMembers.filter((member) => {
    const matchesDepartment =
      selectedDepartment === "all" ||
      member.department.toLowerCase() === selectedDepartment.toLowerCase();
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.department.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const toggleDepartment = (deptKey) => {
    const newExpanded = new Set(expandedDepartments);
    if (newExpanded.has(deptKey)) {
      newExpanded.delete(deptKey);
    } else {
      newExpanded.add(deptKey);
    }
    setExpandedDepartments(newExpanded);
  };

  const MemberCard = ({ member, isCompact = false }) => (
    <div
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
        isCompact ? "p-4" : "p-6"
      }`}
      onClick={() => setSelectedMember(member)}
    >
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src={member.image}
            alt={member.name}
            className={`rounded-full object-cover ${
              isCompact ? "w-12 h-12" : "w-16 h-16"
            }`}
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className={`font-bold text-gray-900 truncate ${
              isCompact ? "text-sm" : "text-lg"
            }`}
          >
            {member.name}
          </h3>
          <p
            className={`text-gray-600 truncate ${
              isCompact ? "text-xs" : "text-sm"
            }`}
          >
            {member.position}
          </p>
          <p
            className={`text-gray-500 truncate ${
              isCompact ? "text-xs" : "text-sm"
            }`}
          >
            {member.department}
          </p>
        </div>
      </div>

      {!isCompact && (
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600 text-sm">
            <Mail className="w-4 h-4 mr-2" />
            <span className="truncate">{member.email}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Phone className="w-4 h-4 mr-2" />
            <span>{member.phone}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{member.office}</span>
          </div>
        </div>
      )}
    </div>
  );

  const MemberModal = ({ member, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {member.name}
                </h2>
                <p className="text-xl text-gray-600">{member.position}</p>
                <p className="text-lg text-gray-500">{member.department}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>{member.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>{member.office}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-3" />
                  <span>{member.yearsAtSchool} years at school</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Qualifications
              </h3>
              <ul className="space-y-2">
                {member.qualifications.map((qual, index) => (
                  <li key={index} className="flex items-start">
                    <Award className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">About</h3>
            <p className="text-gray-600 leading-relaxed">{member.bio}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Specialties
            </h3>
            <div className="flex flex-wrap gap-2">
              {member.specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-1 w-12 bg-yellow-400 rounded"></div>
            <span className="text-yellow-400 font-medium tracking-wide">
              ABOUT-US
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            School Organizational Chart
          </h1>
          <p className="text-blue-100 text-lg">
            Meet our dedicated team of educators, administrators, and support
            staff committed to student success
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl mt-10 max-w-7xl mx-auto overflow-hidden hover:shadow-2xl transition-all duration-300">
        {/* Chart Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
          <h3 className="text-2xl font-bold text-center">
            CARTA ORGANISASI SMK SURIA PERDANA, BATU PAHAT
          </h3>
        </div>

        {/* Chart Image */}
        <div className="p-8">
          <div className="relative bg-gray-50 rounded-xl overflow-hidden">
            <img
              src={organizational_chart_img}
              alt="SMK Suria Perdana Organizational Chart"
              className="w-full h-auto object-contain max-h-screen"
            />

            {/* Interactive Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-gray-800 font-medium">
                  Click to view full organizational structure
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search staff members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Department Filter */}
            <div className="relative">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Departments</option>
                <option value="administration">Administration</option>
                <option value="academics">Academics</option>
                <option value="mathematics">Mathematics</option>
                <option value="science">Science</option>
                <option value="student services">Student Services</option>
                <option value="operations">Operations</option>
                <option value="technology">Technology</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600"
                }`}
              >
                <Grid className="w-4 h-4 mr-2" />
                Grid
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600"
                }`}
              >
                <List className="w-4 h-4 mr-2" />
                List
              </button>
            </div>
          </div>
        </div>

        {/* Organizational Chart by Department */}
        <div className="space-y-8">
          {Object.entries(organizationData).map(([deptKey, department]) => {
            const IconComponent = department.icon;
            const isExpanded = expandedDepartments.has(deptKey);
            const deptMembers = department.members.filter((member) => {
              const matchesSearch =
                member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                member.position
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());
              return (
                selectedDepartment === "all" ||
                member.department.toLowerCase() ===
                  selectedDepartment.toLowerCase() ||
                matchesSearch
              );
            });

            if (selectedDepartment !== "all" && !deptMembers.length)
              return null;

            return (
              <div
                key={deptKey}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div
                  className={`${department.color} p-6 cursor-pointer`}
                  onClick={() => toggleDepartment(deptKey)}
                >
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center">
                      <IconComponent className="w-8 h-8 mr-4" />
                      <div>
                        <h2 className="text-2xl font-bold">
                          {department.title}
                        </h2>
                        <p className="text-blue-100">
                          {deptMembers.length} members
                        </p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-6 h-6" />
                    ) : (
                      <ChevronRight className="w-6 h-6" />
                    )}
                  </div>
                </div>

                {isExpanded && (
                  <div className="p-6">
                    {viewMode === "grid" ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {deptMembers.map((member) => (
                          <MemberCard key={member.id} member={member} />
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {deptMembers.map((member) => (
                          <MemberCard
                            key={member.id}
                            member={member}
                            isCompact={true}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {allMembers.length}
            </div>
            <div className="text-gray-600">Total Staff</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">4</div>
            <div className="text-gray-600">Departments</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">95%</div>
            <div className="text-gray-600">Advanced Degrees</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">4.8</div>
            <div className="text-gray-600">Avg. Years</div>
          </div>
        </div>
      </div>

      {/* Member Detail Modal */}
      {selectedMember && (
        <MemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
};

export default OrganizationalChart;
