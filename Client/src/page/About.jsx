import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We Love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-6xl font-bold tracking-widest">
              Comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A aliquam quos
        voluptatem officia tempora pariatur delectus placeat voluptatibus esse
        ea illo ex doloribus iste, eligendi, autem cupiditate exercitationem
        odio. Sed illo, ratione eveniet nam optio, explicabo, placeat
        dignissimos minus facere cupiditate iste soluta. Laborum ad dolore
        eligendi id quod repudiandae?
      </p>
    </>
  );
};

export default About;
