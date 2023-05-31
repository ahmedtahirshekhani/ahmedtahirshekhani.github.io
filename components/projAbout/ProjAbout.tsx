const ProjAbout = () => {
  return (
    <div className="m-10 font-montserrat">
      <h1 className="text-3xl font-bold text-white">Projects</h1>
      <div className="w-full h-0.5 bg-linecolor"></div>
      <div>
        <div className="flex gap-5 md:gap-1 mt-5 md:mt-10">
          <h1 className="font-bold text-sm md:text-xl">
            Autonomous Trading Bot
          </h1>
          <h1 className="font-light text-sm md:text-xl">- FYP</h1>
        </div>
        <div className="text-secondaryText">
          <h1 className="font-bold text-sm md:text-l ">Aug 2022 - present</h1>
        </div>
        <div className=" gap-1 my-2 md:my-2">
          <h1 className="font-normal text-sm md:text-l ">Technology used:</h1>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 ">
          <p className="font-normal text-sm md:text-l ">Flask</p>
          <p className="font-normal text-sm md:text-l ">Python</p>
          <p className="font-normal text-sm md:text-l ">Next Js</p>
          <p className="font-normal text-sm md:text-l ">ML modules</p>
        </div>
        <div className="mt-8">
          <div className="flex flex-row gap-2">
            <i className="fa-solid fa-circle text-white text-[8px]  mt-2"></i>
            <p className="font-normal text-sm md:text-l ">
              The bot is designed to trade stocks using technical analysis and
              machine learning algorithms. The back-end follows Domain Driven
              Design and front-end follows MVC architecture.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-5 md:gap-1 mt-5 md:mt-10">
          <h1 className="font-bold text-sm md:text-xl">UWaterloo</h1>
          <h1 className="font-light text-sm md:text-xl">
            - Folder Management DnD{' '}
          </h1>
        </div>
        <div className="text-secondaryText">
          <h1 className="font-bold text-sm md:text-l ">Oct 2021 - Jan 2022</h1>
        </div>
        <div className=" gap-1 my-2 md:my-2">
          <h1 className="font-normal text-sm md:text-l ">Technology used:</h1>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 ">
          <p className="font-normal text-sm md:text-l ">React Js</p>
          <p className="font-normal text-sm md:text-l ">PHP</p>
          <p className="font-normal text-sm md:text-l ">SQL</p>
        </div>
        <div className="mt-8">
          <div className="flex flex-row gap-2">
            <i className="fa-solid fa-circle text-white text-[8px]  mt-2"></i>
            <p className="font-normal text-sm md:text-l ">
              Developed Folder Management System with CRUD Features, with Drag
              and Drop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjAbout;
