import { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import SocialCard from "./SocialCard";
import OverviewCard from "./OverviewCard";
import iconFacebook from "../assets/icon-facebook.svg";
import iconInstagram from "../assets/icon-instagram.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconYoutube from "../assets/icon-youtube.svg";

export default function SocialMediaDashboard() {
  const [darkMode, setDarkMode] = useState(false);

  const socialData = [
    { icon: <img src={iconFacebook} alt="Facebook" className="w-6 h-6" />, username: "nathanf", followers: 1987, label: "FOLLOWERS", change: 12, color: "#1877F2" },
    { icon: <img src={iconTwitter} alt="Twitter" className="w-6 h-6" />, username: "nathanf", followers: 1044, label: "FOLLOWERS", change: 99, color: "#1DA1F2" },
    { icon: <img src={iconInstagram} alt="Instagram" className="w-6 h-6" />, username: "realnathanf", followers: "11k", label: "FOLLOWERS", change: 1099, color: "#E1306C" },
    { icon: <img src={iconYoutube} alt="Youtube" className="w-6 h-6" />, username: "Nathan F.", followers: 8239, label: "SUBSCRIBERS", change: -144, color: "#FF0000" }
  ];

  const overviewData = [
    { title: "Page Views", value: 87, change: 3, icon: <img src={iconFacebook} alt="Facebook" className="w-6 h-6" /> },
    { title: "Likes", value: 52, change: -2, icon: <img src={iconFacebook} alt="Facebook" className="w-6 h-6" /> },
    { title: "Likes", value: 5462, change: 2257, icon: <img src={iconInstagram} alt="Instagram" className="w-6 h-6" /> },
    { title: "Profile Views", value: "52k", change: 1375, icon: <img src={iconInstagram} alt="Instagram" className="w-6 h-6" /> },
    { title: "Retweets", value: 117, change: 303, icon: <img src={iconTwitter} alt="Twitter" className="w-6 h-6" /> },
    { title: "Likes", value: 507, change: 553, icon: <img src={iconTwitter} alt="Twitter" className="w-6 h-6" /> },
    { title: "Likes", value: 107, change: -19, icon: <img src={iconYoutube} alt="Youtube" className="w-6 h-6" /> },
    { title: "Total Views", value: 1407, change: -12, icon: <img src={iconYoutube} alt="Youtube" className="w-6 h-6" /> }
  ];

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-gray-100 text-gray-900 min-h-screen"}>
      <div className="container mx-auto p-6">
        <DashboardHeader darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          {socialData.map((item, index) => <SocialCard key={index} item={item} darkMode={darkMode} />)}
        </div>
        
        <h2 className="text-xl font-bold mt-8">Overview - Today</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {overviewData.map((item, index) => <OverviewCard key={index} item={item} darkMode={darkMode} />)}
        </div>
      </div>
    </div>
  );
}
