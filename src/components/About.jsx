import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        One of the most exciting ventures during my academic career has been my exploration of Full Stack Development. With a hands-on approach and a thirst for knowledge, I have delved into both front-end and back-end technologies, honing my skills to create dynamic and immersive web experiences.
        </p>

        <br />

        <p className="text-xl">
        In my pursuit of becoming a well-rounded developer, I have gained expertise in a variety of languages such as HTML, CSS, JavaScript, and various front-end frameworks. On the back-end, I have experience with server-side scripting languages like Node.js and Python, along with databases like MySQL and MongoDB.
        </p>
      </div>
    </div>
  );
};

export default About;
