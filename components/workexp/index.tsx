const WorkExpSection = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="text-2xl font-bold">
              10 Pearls - Software Company
            </div>
          </div>
          <div>
            <div className="text-2xl font-medium">Jun 2022 - Aug 2022</div>
          </div>
        </div>
        <div className="italic">
          <div>Internship - Software Engineering</div>
        </div>
        <ul className="list-disc my-3">
          <li>
            Designed a web-based application for travel itineraries on{" "}
            <strong className="text-primary">
              Angular 13 with Express as backend and Mongo as Database
            </strong>{" "}
            following the MVC design pattern where we were first supposed to
            clear requirements and design the architecture. We used the Agile
            method for development, ensuring industry best practices.
          </li>
          <li>
            Used domain-driven and test-driven approach, with{" "}
            <strong className="text-primary">coverage of 90%</strong>
            throughout the development module where we used Jest for unit
            testing for Angular component.
          </li>
          <li>
            Developed a report display component with i18n for a top US-based
            security company portal in{" "}
            <strong className="text-primary">two days</strong>.Explained the
            code design to colleagues so they can start.
          </li>
        </ul>
      </div>

      <div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="text-2xl font-bold">
              Enzyme Digital - Marketing Agency
            </div>
          </div>
          <div>
            <div className="text-2xl font-medium">Jun 2021 - Aug 2021</div>
          </div>
        </div>
        <div className="italic">
          <div>Internship - Website Development and UI/UX Design</div>
        </div>
        <ul className="list-disc my-3">
          <li>
            Designed SEO-friendly and responsive{" "}
            <strong className="text-primary">
              E-commerce and corporate web
            </strong>
            application in 12 weeks. Analyzed client's requirements and used
            agency's pre-build sections to aim for{" "}
            <strong className="text-primary">
              90%+ performance with quick delivery
            </strong>
            .
          </li>
          <li>
            Acquired{" "}
            <strong className="text-primary">
              100% authentic web traffic{" "}
            </strong>
            by integrating Facebook Pixel and Google tag to avoid double firing
            and inaccurate ROAS on Ads Manager through JavaScript code where
            other developers had no experience.
          </li>
          <li>
            Reduced{" "}
            <strong className="text-primary">50% of the employee time</strong>{" "}
            by developing a React Based Application which completes the 4 hours
            long daily repetitive task in just 2 hours.
          </li>
          <li>
            Developed a report display component with i18n for a top US-based
            security company portal in{" "}
            <strong className="text-primary">two days</strong>.Explained the
            code design to colleagues so they can start.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExpSection;
