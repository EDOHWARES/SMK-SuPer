import { FaAward, FaRegBuilding, FaHistory } from "react-icons/fa";

const Welcome = () => {
  return (
    <div className="bg-white border-t-4 border-green-900 mb-[4rem]">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-3 gap-6 text-center">
        {/* About Section */}
        <div className="flex flex-col items-center">
          <FaRegBuilding className="text-6xl text-blue-700" />
          <h3 className="font-bold text-lg mt-2">About</h3>
          <p className="text-gray-600">Learn more</p>
        </div>

        {/* Achievement Section */}
        <div className="flex flex-col items-center">
          <FaAward className="text-6xl text-black" />
          <h3 className="font-bold text-lg mt-2">Achievement</h3>
          <p className="text-gray-600">Learn more</p>
        </div>

        {/* Legacy Section */}
        <div className="flex flex-col items-center">
          <FaHistory className="text-6xl text-yellow-600" />
          <h3 className="font-bold text-lg mt-2">Legacy</h3>
          <p className="text-gray-600">Learn more</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-t-4 border-green-900">
        {/* About Placeholder */}
        <div className="text-center">
          <div className="w-full h-48 bg-gray-300 opacity-60"></div>
          <p className="text-gray-700 px-4 mt-2">
            SMK SURIA PERDANA premier fully-residential school situated in Bandar Enstek, Malaysia, established in 1947.
          </p>
        </div>

        {/* Achievement Placeholder */}
        <div className="text-center border-t-4 border-yellow-500">
          <div className="w-full h-48 bg-gray-300 opacity-60"></div>
          <p className="text-gray-700 px-4 mt-2">
            An emphasis on learning, extra-curricular, and STEM in International, National, and State levels.
          </p>
        </div>

        {/* Legacy Placeholder */}
        <div className="text-center border-t-4 border-green-900">
          <div className="w-full h-48 bg-gray-300 opacity-60"></div>
          <p className="text-gray-700 px-4 mt-2">
            A rich history of service and contributions to the Nation from among the Alumni ranks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
