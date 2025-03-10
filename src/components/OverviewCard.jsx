import iconUp from "../assets/icon-up.svg";
import iconDown from "../assets/icon-down.svg";

export default function OverviewCard({ item, darkMode }) {
  return (
    <div className={`p-4 rounded-lg shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        {item.icon}
      </div>
      <p className="text-2xl font-bold mt-2">{item.value}</p>
      <p className={item.change > 0 ? "text-green-500" : "text-red-500"}>
        <img src={item.change > 0 ? iconUp : iconDown} alt={item.change > 0 ? "Up" : "Down"} className="inline-block w-2 h-1" />
        {Math.abs(item.change)}%
      </p>
    </div>
  );
}
