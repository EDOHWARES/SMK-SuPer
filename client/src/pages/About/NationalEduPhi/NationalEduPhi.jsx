import React from 'react';
import { BookOpen, Users, Lightbulb, Target, Award, Globe } from 'lucide-react';

const NationalEducationPhilosophy = () => {
  // Demo data - easily replaceable with database fetch
  const philosophyData = {
    title: "National Education Philosophy",
    subtitle: "Shaping Tomorrow's Leaders Through Excellence in Education",
    mainPhilosophy: {
      text: "Education in Malaysia is an on-going effort towards further developing the potential of individuals in a holistic and integrated manner, so as to produce individuals who are intellectually, spiritually, emotionally and physically balanced and harmonious, based on a firm belief in and devotion to God.",
      vision: "To develop Malaysia as an excellent centre for educational excellence and a regional hub of educational excellence.",
      mission: "To ensure equitable access to quality education that meets the highest standards of relevance and quality."
    },
    coreValues: [
      {
        icon: BookOpen,
        title: "Academic Excellence",
        description: "Pursuing the highest standards of learning and intellectual development across all disciplines."
      },
      {
        icon: Users,
        title: "Character Development",
        description: "Building strong moral values, ethics, and leadership qualities in every student."
      },
      {
        icon: Globe,
        title: "Global Citizenship",
        description: "Preparing students to be responsible global citizens who contribute to society."
      },
      {
        icon: Lightbulb,
        title: "Innovation & Creativity",
        description: "Fostering creative thinking and innovative problem-solving capabilities."
      },
      {
        icon: Target,
        title: "Goal-Oriented Learning",
        description: "Setting clear objectives and measurable outcomes for educational success."
      },
      {
        icon: Award,
        title: "Excellence Recognition",
        description: "Celebrating achievements and recognizing outstanding contributions to education."
      }
    ],
    keyPrinciples: [
      {
        title: "Holistic Development",
        content: "We believe in nurturing the complete individual - mind, body, and spirit - to create well-rounded citizens capable of contributing meaningfully to society."
      },
      {
        title: "Inclusive Education",
        content: "Our philosophy embraces diversity and ensures that quality education is accessible to all, regardless of background, ability, or circumstances."
      },
      {
        title: "Lifelong Learning",
        content: "We instill a passion for continuous learning that extends beyond formal education into all aspects of life and career development."
      },
      {
        title: "Cultural Heritage",
        content: "While embracing global perspectives, we remain rooted in our cultural values and traditions, preserving our identity for future generations."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {philosophyData.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              {philosophyData.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Main Philosophy Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Educational Foundation
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-5xl mx-auto">
              {philosophyData.mainPhilosophy.text}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                {philosophyData.mainPhilosophy.vision}
              </p>
            </div>
            <div className="bg-indigo-50 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                {philosophyData.mainPhilosophy.mission}
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that guide our educational approach and shape our learning environment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {philosophyData.coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Principles Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The guiding principles that form the backbone of our educational philosophy and institutional values.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {philosophyData.keyPrinciples.map((principle, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {principle.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Educational Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover how our national education philosophy shapes the learning experience and prepares students for success in the 21st century.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Learn More About Our Programs
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Contact Our Admissions Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NationalEducationPhilosophy;