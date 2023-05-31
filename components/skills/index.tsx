const Skills = () => {
  return (
    <div className="m-10 font-montserrat">
      <h1 className="text-3xl font-bold text-white">Skills</h1>
      <div className="w-full h-0.5 bg-linecolor"></div>
      <div>
        <div className="flex gap-1 mt-10">
          <h1 className="font-bold text-sm md:text-xl text-secondaryText">
            Languages
          </h1>
        </div>
        <div className=" grid grid-cols-4 text-sm md:text-l ">
          <p className="font-normal">C</p>
          <p className="font-normal">C++</p>
          <p className="font-normal">javaScript</p>
          <p className="font-normal">Haskell</p>
          <p className="font-normal">SQL</p>
          <p className="font-normal">Python</p>
          <p className="font-normal">Solidity</p>
          <p className="font-normal">PHP</p>
          <p className="font-normal">HTML</p>
          <p className="font-normal">CSS</p>
        </div>
      </div>
      <div>
        <div className="flex gap-1 mt-10">
          <h1 className="font-bold text-sm md:text-xl text-secondaryText">Frameworks</h1>
        </div>
        <div className=" grid grid-cols-4 text-sm md:text-l ">
          <p className="font-normal">React</p>
          <p className="font-normal">Express</p>
          <p className="font-normal">Bootstrap</p>
          <p className="font-normal">Next</p>
          <p className="font-normal">Node</p>
          <p className="font-normal">Flask</p>
          <p className="font-normal">Tailwind</p>
        </div>
      </div>
      <div>
        <div className="flex gap-1 mt-10">
          <h1 className="font-bold text-sm md:text-xl text-secondaryText">Tools</h1>
        </div>
        <div className=" grid  grid-cols-3 md:grid-cols-4 text-sm md:text-l">
          <p className="font-normal">Git</p>
          <p className="font-normal">AWS</p>
          <p className="font-normal">Postman</p>
          <p className="font-normal">Heroku</p>
          <p className="font-normal">Docker</p>
          <p className="font-normal">GCP</p>
          <p className="font-normal">Jira</p>
          <p className="font-normal">Figma</p>
          <p className="font-normal">VS code</p>
          <p className="font-normal">Trello</p>
          <p className="font-normal">Draw.io</p>
          <p className="font-normal">Canva</p>
          <p className="font-normal">Google Collab</p>
        </div>
      </div>
      <div>
        <div className="flex gap-1 mt-10">
          <h1 className="font-bold text-sm md:text-xl text-secondaryText">Databases</h1>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 text-sm md:text-l">
          <p className="font-normal">MongoDB</p>
          <p className="font-normal">mySQL</p>
          <p className="font-normal">PostgreSQL</p>
          <p className="font-normal">FireBase</p>
        </div>
      </div>
      <div>
        <div className="flex gap-1 mt-10">
          <h1 className="font-bold text-sm md:text-xl text-secondaryText">Blockchain</h1>
        </div>
        <div className=" grid grid-cols-3 md:grid-cols-4 text-sm md:text-l ">
          <p className="font-normal">Ethereum</p>
          <p className="font-normal">Truffle</p>
          <p className="font-normal">Ganache</p>
          <p className="font-normal">Remix</p>
          <p className="font-normal">solidity</p>
          <p className="font-normal">Metamask</p>
        </div>
      </div>
      <div>
        <div className="flex gap-1 mt-10">
          <h1 className="font-bold text-sm md:text-xl text-secondaryText">
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
          <h1 className="font-bold text-sm md:text-xl text-secondaryText">
            Interpersonal Skills
          </h1>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 text-sm md:text-l">
          <p className="font-normal">Communication</p>
          <p className="font-normal">Teamwork</p>
          <p className="font-normal">Leadership</p>
          <p className="font-normal">Problem-solving</p>
          <p className="font-normal">Adaptability</p>
          <p className="font-normal">Creativity</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
