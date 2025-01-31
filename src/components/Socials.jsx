import React from "react";
import { github, linkedin, resume } from "../assets"; // Make sure resumeIcon exists in assets

const Socials = () => {
  const links = [
    { name: "GitHub", url: "https://github.com/pranavReddy120", img: github },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pranav-reddy120/",
      img: linkedin,
    },
    {
      name: "Resume",
      url: "https://drive.google.com/file/d/1Jq0zG9pwunZde106fLQlBCLfubSpCJru/view?usp=sharing",
      img: resume, // Replace with an actual resume icon in assets
    },
  ];

  return (
    <div className="w-full text-white py-4 flex justify-center items-center space-x-6">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <img
            src={link.img}
            alt={link.name}
            className="w-8 h-8 object-contain transition-transform duration-300 hover:scale-110"
          />
          <span className="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {link.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Socials;
