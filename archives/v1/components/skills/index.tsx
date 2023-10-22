const Skills = () => {
  return (
    <div className="m-10 font-montserrat">
      <h1 className="text-4xl font-bold text-white">Skills</h1>
      <div className="w-full h-0.5 bg-linecolor"></div>
      <div>
        <div className="flex gap-1 mt-10">
          <h1 className="font-bold text-sm md:text-2xl text-secondaryText">
            Languages
          </h1>
        </div>
        <div className=" grid grid-cols-4 text-sm md:text-l ">
          <p className="font-normal">C</p>
          <p className="font-normal">C++</p>
          <p className="font-normal">JavaScript</p>
          <p className="font-normal">TypeScript</p>
          <p className="font-normal">Haskell</p>
          <p className="font-normal">SQL</p>
          <p className="font-normal">Python</p>
          <p className="font-normal">Solidity</p>
        </div>
      </div>
      <div>
        <div className="flex gap-1 mt-10">
          <h1 className="font-bold text-sm md:text-2xl text-secondaryText">Frameworks</h1>
        </div>
        <div className=" grid grid-cols-3 md:grid-cols-4 text-sm md:text-l ">
          <p className="font-normal">React JS</p>
          <p className="font-normal">Express JS</p>
          <p className="font-normal">Angular JS</p>
          <p className="font-normal">Next JS</p>
          <p className="font-normal">Node JS</p>
          <p className="font-normal">Flask</p>
          <p className="font-normal">MongoDB</p>
          <p className="font-normal">Django</p>
        </div>
      </div>
      <div>
        <div className="flex gap-1 mt-10">
          <h1 className="font-bold text-sm md:text-2xl text-secondaryText">Developer Tools</h1>
        </div>
        <div className=" grid  grid-cols-4 md:grid-cols-4 text-sm md:text-l">
          <p className="font-normal">Git</p>
          <p className="font-normal">Firebase</p>
          <p className="font-normal">Miro</p>
          <p className="font-normal">Trello</p>
          <p className="font-normal">Draw.io</p>
          <p className="font-normal">Canva</p>

        </div>
      </div>
      <div>
        <div className="flex gap-1 mt-10">
          <h1 className="font-bold text-sm md:text-2xl text-secondaryText">
            Digital Marketing
          </h1>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 text-sm md:text-l">
          <p className="font-normal">Digital Ads</p>
          <p className="font-normal">Adobe Photoshop</p>
          <p className="font-normal">Adobe Illustrator</p>
          <p className="font-normal">SEO</p>
          <p className="font-normal">Keyword Research</p>
          <p className="font-normal">Wordpress</p>
        </div>
      </div>
      <div>
        <div className="flex gap-1 mt-10">
          <h1 className="font-bold text-sm md:text-2xl text-secondaryText">
            Interpersonal Skills
          </h1>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 text-sm md:text-l">
          <p className="font-normal">Communication</p>
          <p className="font-normal">Teamwork</p>
          <p className="font-normal">Leadership</p>
          <p className="font-normal">Conscientiousness</p>
          <p className="font-normal">Passionate Learner</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
