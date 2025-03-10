import iconUp from "../assets/icon-up.svg";
import iconDown from "../assets/icon-down.svg";

export default function SocialCard({ item, darkMode }) {
  return (
    <div className={`p-4 border-t-4 rounded-lg shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`} style={{ borderColor: item.color }}>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          {item.icon}
          <span>@{item.username}</span>
        </div>
      </div>
      <h2 className="text-3xl font-bold mt-2">{item.followers}</h2>
      <p className="uppercase text-gray-500">{item.label}</p>
      <p className={item.change > 0 ? "text-green-500" : "text-red-500"}>
        <img src={item.change > 0 ? iconUp : iconDown} alt={item.change > 0 ? "Up" : "Down"} className="inline-block w-2 h-1" />
        {Math.abs(item.change)} Today
      </p>
    </div>
  );
}