const StatsCard = ({ title, value, icon, color }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <div className={`${color} rounded-full p-3 text-white mr-4`}>{icon}</div>
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default StatsCard
  