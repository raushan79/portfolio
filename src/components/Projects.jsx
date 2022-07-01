import React from "react";
import arrayDestruct from "../assets/project/arrayDestruct.png";
// import installNode from "../assets/project/installNode.jpg";
import navbar from "../assets/project/navbar.png";
import reactParallax from "../assets/project/reactParallax.png";
// import reactSmooth from "../assets/project/reactSmooth.jpg";
import dineout from '../assets/project/dineoutclone.png'
// import reactWeather from "../assets/project/reactWeather.jpg";

const Projects = () => {

  const handleLink=(link)=>{
    
      window.open(link, "_blank")
   
  };

  

  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      live: "https://github.com/raushansft/Zara-Clone.git",
      code:"https://github.com/raushansft/Zara-Clone.git"
    },
    {
      id: 2,
      src: reactParallax,
      live : "https://raushansft.github.io/Calculator-Using-HTML-CSS-JavaScript/",
      code : "https://github.com/raushansft/Calculator-Using-HTML-CSS-JavaScript.git",
    },
    {
      id: 3,
      src: navbar,
      live : "https://raushansft.github.io/WhatsApp-Direct-Message-Sender/",
      code : "https://github.com/raushansft/WhatsApp-Direct-Message-Sender.git",
    },
    {
      id: 4,
      src: dineout,
      live : "https://raushansft.github.io/Dineout-Clone/",
      code : "https://github.com/raushansft/Dineout-Clone.git"
    },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out my popular project right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,live,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={()=>handleLink(live)}>
                  Live Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={()=>handleLink(code)}>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
