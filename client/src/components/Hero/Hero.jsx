import React from "react";
import { FaBook, FaLightbulb, FaUsers, FaTools } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-r from-[#00247D] to-[#003891] min-h-[60vh] flex items-center justify-center mt-[5rem]">
      <div className="max-w-[1440px] py-10 px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        
        {/* Left Column - School Logo */}
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="School Logo" className="w-48 md:w-60 lg:w-72 drop-shadow-lg" />
        </div>

        {/* Right Column */}
        <div className="md:col-span-2 space-y-10">
          
          {/* Top Row - Icons with Titles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: <FaBook />, title: t("knowledge") },
              { icon: <FaLightbulb />, title: t("innovation") },
              { icon: <FaUsers />, title: t("self_belief") },
              { icon: <FaTools />, title: t("hardwork") },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="text-[#FFD700] text-4xl md:text-5xl transition-transform transform group-hover:scale-110">
                  {item.icon}
                </div>
                <p className="mt-2 text-lg font-semibold text-white">{item.title}</p>
              </div>
            ))}
          </div>

          {/* Bottom Row - School Description */}
          <div className="text-center md:text-left space-y-4">
            <p className="text-base md:text-xl text-gray-300 leading-relaxed">
              <span className="font-bold text-gray-200">{t("school_description")}</span>  
              {/* <span className="font-bold text-gray-200"> {t("school_motto")}</span> */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
