const Work = () => {
  return (
    <div className="m-10">
      <h1 className="text-3xl font-bold text-white">Work Experience</h1>
      <div className="w-full h-0.5 bg-linecolor"></div>
      <div>
        <div className="flex gap-1 mt-10">
          <h1 className="font-bold text-xl">Software Engineer Intern </h1>
          <h1 className="font-light text-xl">- 10 Pearls</h1>
        </div>
        <div className="text-secondaryText">
          <h1 className="font-bold text-l ">Jun 2022 - Aug 2022</h1>
        </div>
        <div className="mt-8">
          <div className="flex flex-row gap-2">
            <i className="fa-solid fa-circle text-white text-[8px]  mt-2"></i>
            <p className="font-normal text-l ">
              Designed a web-based application for travel itineraries on Angular
              13 with Express as backend and Mongo as Database following the MVC
              design pattern where we were first supposed to clear requirements
              and design the architecture. We used the Agile method for
              development, ensuring industry best practices.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <i className="fa-solid fa-circle text-white text-[8px]  mt-2"></i>
            <p className="font-normal text-l ">
              Used domain-driven and test-driven approach, with coverage of
              90%throughout the development module where we used Jest for unit
              testing for Angular component.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <i className="fa-solid fa-circle text-white text-[8px]  mt-2"></i>
            <p className="font-normal text-l ">
              Developed a report display component with i18n for a top US-based
              security company portal in two days.Explained the code design to
              colleagues so they can start.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-1 mt-16">
          <h1 className="font-bold text-xl">Web Developer & UI/UX Intern</h1>
          <h1 className="font-light text-xl">- Enzyme Digital</h1>
        </div>
        <div className="text-secondaryText">
          <h1 className="font-bold text-l ">Jun 2021 - Aug 2021</h1>
        </div>
        <div className="mt-8">
          <div className="flex flex-row gap-2">
            <i className="fa-solid fa-circle text-white text-[8px]  mt-2"></i>
            <p className="font-normal text-l ">
              Designed SEO-friendly and responsive E-commerce and corporate
              webapplication in 12 weeks. Analyzed client's requirements and
              used agency's pre-build sections to aim for 90%+ performance with
              quick delivery.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <i className="fa-solid fa-circle text-white text-[8px]  mt-2"></i>
            <p className="font-normal text-l ">
              Acquired 100% authentic web traffic by integrating Facebook Pixel
              and Google tag to avoid double firing and inaccurate ROAS on Ads
              Manager through JavaScript code where other developers had no
              experience.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <i className="fa-solid fa-circle text-white text-[8px]  mt-2"></i>
            <p className="font-normal text-l ">
              Reduced 50% of the employee time by developing a React Based
              Application which completes the 4 hours long daily repetitive task
              in just 2 hours.
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
