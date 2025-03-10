export default function DashboardHeader({ darkMode, toggleDarkMode }) {
    return (
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Social Media Dashboard</h1>
        <div className="flex items-center">
          <span className="mr-2">Dark Mode</span>
          <button
            onClick={toggleDarkMode}
            className={`${darkMode ? "bg-green-500" : "bg-gray-300"} relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className={`${darkMode ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform bg-white rounded-full transition`} />
          </button>
        </div>
      </div>
    );
  }
  