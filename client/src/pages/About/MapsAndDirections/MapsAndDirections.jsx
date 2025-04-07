import React from "react";
import { MdOutlineMyLocation } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const MapsAndDirections = () => {
  return (
    <div className="py-10 px-6 md:px-12 lg:px-20 mt-[5rem] max-w-[1440px] mx-auto">
      <h2 className="text-2xl md:text-3xl text-gray-700 mb-[1rem]">
        Map and Contact
      </h2>

      {/* Google Map Embed */}
      <div className="w-full h-[450px] mb-[2rem]">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.6639625907937!2d103.15129370000001!3d1.8829532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d05dbdfb75fd35%3A0xbbdee4bd03370125!2sSMK%20Suria%20Perdana!5e0!3m2!1sen!2suk!4v1743985834575!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <ul className="flex items-start justify-between gap-10 md:gap-4 mb-[5rem] flex-col md:flex-row ">
        <li className="flex items-start gap-2">
          <MdOutlineMyLocation className="mt-1 text-gray-500" />
          <span className="text-gray-500">
            School Address: <br /> <br />
            Jalan Parit Semarang, <br /> 86400 Parit Raja, <br /> Johor Darul
            Ta'zim, Malaysia
          </span>
        </li>
        <li className="flex items-start gap-2">
          <BsTelephoneInbound className="mt-1 text-gray-500" />
          <span className="text-gray-500">
            Telephony: <br /> <br />
            Tel: +6074541866
          </span>
        </li>
        <li className="flex items-start gap-2">
          <MdOutlineEmail className="mt-1 text-gray-500" />
          <span className="text-gray-500">
            Email: <br /> <br /> Email: smk@smk.edu.my
          </span>
        </li>
      </ul>

      <div className="grid grid-cols-3 gap-2">
        {/* Top Row */}
        <div className="col-span-2 h-60 bg-gray-300 bg-opacity-50 rounded" />
        <div className="h-60 bg-gray-300 bg-opacity-50 rounded" />

        {/* Middle Grid */}
        <div className="h-52 bg-gray-300 bg-opacity-50 rounded" />
        <div className="row-span-2 h-full bg-gray-300 bg-opacity-50 rounded" />
        <div className="h-52 bg-gray-300 bg-opacity-50 rounded" />

        <div className="col-span-2 h-52 bg-gray-300 bg-opacity-50 rounded" />
        <div className="h-52 bg-gray-300 bg-opacity-50 rounded" />

        {/* Bottom Grid */}
        <div className="h-52 bg-gray-300 bg-opacity-50 rounded" />
        <div className="col-span-2 h-52 bg-gray-300 bg-opacity-50 rounded" />
      </div>
    </div>
  );
};

export default MapsAndDirections;
