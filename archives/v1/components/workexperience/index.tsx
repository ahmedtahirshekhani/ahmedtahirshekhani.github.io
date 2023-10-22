const Work = () => {
  return (
    <div className="m-10 font-montserrat">
      <h1 className="text-4xl font-bold text-white">Work Experience</h1>
      <div className="w-full h-0.5 bg-linecolor"></div>
      <div>
        <div className="flex gap-5 md:gap-1 mt-10">
          <h1 className="font-bold text-sm md:text-2xl">
            Lab/Software Developer (Part Time){' '}
          </h1>
        </div>
        <div className="text-secondaryText">
          <div className=" w-20 h-6 items-center font-bold text-sm md:text-l flex justify-center rounded-lg text-primaryBackground bg-linecolor outline">
            Al Nafi
          </div>
          <h1 className="font-bold text-sm md:text-l ">Jun 2022 - Aug 2022</h1>
        </div>
        <div className="mt-8">
          <div className="flex flex-row gap-2">
            <i className="fa-solid fa-circle text-white text-[8px]  mt-2"></i>
            <p className="font-normal text-sm md:text-l ">
              Developed hands-on applications using AWS tools (Transcribe,
              Polly, Code Pipeline, Fraud Detector and Face Detector) and DApps
              (Ganache and Truffle) in 2 days each.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <i className="fa-solid fa-circle text-white text-[8px]  mt-2"></i>
            <p className="font-normal text-sm md:text-l ">
              Customizing an open source CRM based on React and Django to
              increase sales team productivity by 80%.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <i className="fa-solid fa-circle text-white text-[8px]  mt-2"></i>
            <p className="font-normal text-sm md:text-l ">
              Led a team of 7+ members to set up and customize LMS and CMS using
              the OpenEdx platform
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-5 md:gap-1 mt-10">
          <h1 className="font-bold text-sm md:text-2xl">
            Software Engineer Intern{' '}
          </h1>
        </div>
        <div className="text-secondaryText">
          <div className=" w-20 h-6 items-center font-bold text-sm md:text-l flex justify-center rounded-lg text-primaryBackground bg-linecolor outline">
            10 Pearls
          </div>
          <h1 className="font-bold text-sm md:text-l ">Jun 2022 - Aug 2022</h1>
        </div>
        <div className="mt-8">
          <div className="flex flex-row gap-2">
            <i className="fa-solid fa-circle text-white text-[8px]  mt-2"></i>
            <p className="font-normal text-sm md:text-l ">
              Designed a web-based travel itinerary application using Angular
              13, Express and Mongo, following MVC design pattern and industry
              best practices. Utilized domain-driven and test-driven approach,
              achieving 90% test coverage with Jest for unit testing.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <i className="fa-solid fa-circle text-white text-[8px]  mt-2"></i>
            <p className="font-normal text-sm md:text-l ">
              Developed a component for a top US-based security company portal
              in 2 days, using Agile method and i18n translation for the report
              display component. Explained the codebase to colleagues for better
              understanding
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-1 md:gap-1 mt-8 md:mt-16">
          <h1 className="font-bold text-sm md:text-2xl">
            Web Developer & UI/UX Intern
          </h1>
        </div>
        <div className="text-secondaryText">
          <div className=" w-32 h-6 items-center font-bold text-sm md:text-l flex justify-center rounded-lg text-primaryBackground bg-linecolor outline">
            Enzyme Digital
          </div>
          <h1 className="font-bold text-sm md:text-l ">Jun 2021 - Aug 2021</h1>
        </div>
        <div className="mt-8">
          <div className="flex flex-row gap-2">
            <i className="fa-solid fa-circle text-white text-[8px]  mt-2"></i>
            <p className="font-normal text-sm md:text-l ">
              Designed SEO-friendly and responsive E-commerce and corporate
              webapplication in 12 weeks. Analyzed client's requirements and
              used agency's pre-build sections to aim for 90%+ performance with
              quick delivery.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <i className="fa-solid fa-circle text-white text-[8px]  mt-2"></i>
            <p className="font-normal text-sm md:text-l ">
              Improved 100% web traffic accuracy while integrating Facebook
              Pixel and Google tag, and reduced employee time developing a
              React-based application to automate a 4-hour daily task, cutting
              time in half
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <i className="fa-solid fa-circle text-white text-[8px]  mt-2"></i>
            <p className="font-normal text-l ">
              Developed a report display component with i18n for a top US-based
              security company portal in two days. Explained the code design to
              colleagues so they can start.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
