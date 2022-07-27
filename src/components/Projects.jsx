import React from "react";
import './Project.css';
import arrayDestruct from "../assets/project/arrayDestruct.png";
// import installNode from "../assets/project/installNode.jpg";
// import navbar from "../assets/project/navbar.png";
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
      src: dineout,
      title:"Dineout Web Clone",
      description :"Dineout is a table booking platform helping customers to do table booking in their favourite restaurants. We were a team of four members, distributed the whole website amoung us. and make a clone website of Dineout in 5 days.",
      techstack: "HTML, CSS, JavaScript, Json-Server,DOM Api ",
      live : "https://raushansft.github.io/Dineout-Clone/",
      code : "https://github.com/raushansft/Dineout-Clone.git"
    },
    {
      id: 2,
      src: arrayDestruct,
      title:"Zara Web Clone",
      description :"ZARA, is a Spanish apparel retailer based in Arteixo, A Coruña, Galicia, Spain. The company specialises in fast fashion.We were a team of five members, distributed the whole website amoung us and make a clone of Zara Website. in 5 days",
      techstack: "HTML, CSS, JavaScript, DOM Api",
      live: "https://sanojzaraclone.netlify.app/",
      code:"https://github.com/raushansft/Zara-Clone.git"
   
    },
    {
      id: 3,
      src: reactParallax,
      title:"Claculator Web Apps",
      description :"This app allow user to perform basic arithemic operation.Is is solo project developed in 2 days",
      techstack: "HTML, CSS, JavaScript",     
        live : "https://raushansft.github.io/Calculator-Using-HTML-CSS-JavaScript/",
        code : "https://github.com/raushansft/Calculator-Using-HTML-CSS-JavaScript.git",
    },
    // {
    //   id: 4,
    //   src: reactParallax,
    //   live : "https://raushansft.github.io/Calculator-Using-HTML-CSS-JavaScript/",
    //   code : "https://github.com/raushansft/Calculator-Using-HTML-CSS-JavaScript.git",
     
    // },
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

      // 
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out my popular project right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,title,description,techstack, live,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className=" own-container">
                <p className="title-own font-bold ">{title}</p>
                <p className="desc-own font-light">{description}</p>
                <hr />
                <p className="tech-title-own font-bold ">Tech Stack</p>
                <p className="techstack-own font-medium">{techstack}</p>            
                
              </div>
              <hr />
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
