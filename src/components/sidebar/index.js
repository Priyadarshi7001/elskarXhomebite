import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/svgs/avatar.svg";
import eth from "../../assets/images/svgs/eth.svg";
import { Link, NavLink } from "react-router-dom";

import {
  FaAngleDown,
  FaAngleUp,
  FaFacebookF,
  FaLinkedin,
  FaMedium,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const Sidebar = () => {
  const [resourceActive, setResourceActive] = useState(false);
  const [generalActive, setGeneralActive] = useState(false);
  const [date, setDate] = useState(new Date());

  const menuItems = [
    {
      id: 1,
      title: "Dashboard",
      link: "/",
    },
    {
      id: 2,
      title: "All IDO's",
      link: "/all-ido",
    },
    {
      id: 3,
      title: "AirDrop",
      link: "/airdrop",
    },
    {
      id: 4,
      title: "Honey-Bite Venture",
      link: "/honey-bite-venture",
    },
    {
      id: 5,
      title: "Membership",
      link: "/membership",
    },
  ];

  const resources = [
    {
      id: 1,
      title: "Feedback & Bug Report",
      link: "/feedback-bug-report",
    },
    {
      id: 2,
      title: "Governance",
      link: "/governance",
    },
    {
      id: 3,
      title: "Help",
      link: "/help",
    },
  ];

  const general = [
    {
      id: 1,
      title: "Apply to Launch",
      link: "/apply-to-launch",
    },
    {
      id: 2,
      title: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      id: 3,
      title: "Terms of Use",
      link: "/terms-of-use",
    },
  ];

  const social = [
    {
      id: 1,
      icon: <FaTwitter />,
      link: "https://twitter.com/honeybitebsc",
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/company/honeybitebsc/",
    },
    {
      id: 3,
      icon: <FaTelegram />,
      link: "https://t.me/honeybitebsc",
    },
    {
      id: 4,
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/honeybitebsc",
    },
    {
      id: 5,
      icon: <FaMedium />,
      link: "https://honeybitebsc.medium.com/",
    },
  ];

  const handleResource = () => {
    setResourceActive(!resourceActive);
    setGeneralActive(false);
  };

  const handleGeneral = () => {
    setGeneralActive(!generalActive);
    setResourceActive(false);
  };

  useEffect(() => {
    // get the current date from system
    // date format: Month Name Date, Hours:Minutes:Seconds
    const timer = setInterval(() => {
        setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  return (
    <div className="bg-[#F3F3F3] shadow-xl">
      <div className="flex-col justify-between items-start p-10 min-h-screen">
        <div>
          <div className="text-center">
            <Link to="/">
              <img src={logo} alt="logo" className="mx-auto md:w-full logo" />
            </Link>
          </div>
          <button className="flex w-full justify-center items-center gap-2 border border-[#2E2F30] p-3 rounded">
            <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />
            <span className="text-[#2E2F30] font-medium">0x8F0...DA117</span>
            <img src={eth} alt="eth" className="w-8 h-8" />
          </button>
          <div className="text-right mt-1">
            <p className="text-xs">
                {monthNames[date.getMonth()]} {date.getDate()}, {date.toLocaleTimeString()}
            </p>
          </div>
          <div className="mt-6 menu">
            {menuItems.map((item) => (
              <NavLink
                to={item.link}
                key={item.id}
                className="block py-2 rounded hover:bg-[#2E2F30] hover:text-white hover:px-4 transition-[0.5s] font-medium"
              >
                {item.title}
              </NavLink>
            ))}
          </div>
          <div className="mt-6 menu">
            <div
              className="text-center flex justify-start items-center gap-3 mb-4 font-medium cursor-pointer"
              onClick={handleResource}
            >
              Resources {resourceActive ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {resourceActive &&
              resources.map((item) => (
                <NavLink
                  to={item.link}
                  key={item.id}
                  className="block py-2 rounded hover:bg-[#2E2F30] hover:text-white hover:px-4 transition-[0.5s] font-medium"
                >
                  {item.title}
                </NavLink>
              ))}
          </div>
          <div className="mt-6 menu">
            <div
              className="text-center flex justify-start items-center gap-3 mb-4 font-medium cursor-pointer"
              onClick={handleGeneral}
            >
              General {generalActive ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {generalActive &&
              general.map((item) => (
                <NavLink
                  to={item.link}
                  key={item.id}
                  className="block py-2 rounded hover:bg-[#2E2F30] hover:text-white hover:px-4 transition-[0.5s] font-medium"
                >
                  {item.title}
                </NavLink>
              ))}
          </div>
        </div>
        <div className="mt-8 social">
          <div className="text-center flex justify-center items-center gap-3 mb-4 font-medium">
            {social.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                className="bg-[#2E2F30] hover:text-[#fff] text-[white] transition-[0.5s] w-[40px] h-[40px] rounded text-2xl flex justify-center items-center"
              >
                {item.icon}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-center text-xs">
            Copyright © 2022. All Rights Reserved by Honey-Bite
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
