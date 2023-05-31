const Education = () => {
  return (
    <div className="m-10 font-montserrat">
      <h1 className="text-3xl font-bold text-white">Education</h1>
      <div className="w-full h-0.5 bg-linecolor"></div>
      <div>
        <div className="flex gap-5 md:gap-1 mt-5 md:mt-10">
          <h1 className="font-bold text-sm md:text-xl">BS Computer Science</h1>
          <h1 className="font-light text-sm md:text-xl">
            - Lahore University of Management Sciences
          </h1>
        </div>
        <div className="text-secondaryText">
          <h1 className="font-bold text-sm md:text-l ">Sep 2019 - June 2023</h1>
          <h1 className="font-bold text-sm md:text-l">cGPA - 3.75</h1>
        </div>
        <div className=" gap-1 my-1 md:my-2">
          <h1 className="font-normal text-sm md:text-l ">Courses:</h1>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 ">
          <p className="font-normal text-sm md:text-l ">Software Engineering</p>
          <p className="font-normal text-sm md:text-l ">Machine Learning</p>
          <p className="font-normal text-sm md:text-l ">Computer Vision</p>
          <p className="font-normal text-sm md:text-l ">
            Artificial Intelligence
          </p>
          <p className="font-normal text-sm md:text-l ">Database Systems</p>
          <p className="font-normal text-sm md:text-l ">Operating Systems</p>
          <p className="font-normal text-sm md:text-l ">Data Science</p>
          <p className="font-normal text-sm md:text-l ">Algorithms</p>
          <p className="font-normal text-sm md:text-l ">Data Structures</p>
          <p className="font-normal text-sm md:text-l ">Blockchain</p>
          <p className="font-normal text-sm md:text-l ">Network Security</p>
          <p className="font-normal text-sm md:text-l ">Distributed Systems</p>
        </div>
      </div>
      <div className="mt-8 md:mt-16">
        <div className="flex gap-5 ">
          <h1 className="font-bold text-sm md:text-xl">Cambridge A Levels</h1>
          <h1 className="font-light text-sm md:text-xl">
            - Beacon House College Campus North
          </h1>
        </div>
        <div className="text-secondaryText">
          <h1 className="font-bold text-sm md:text-l ">Grade - 4 A’s</h1>
        </div>
        <div className=" gap-1 my-2">
          <h1 className="font-normal text-sm md:text-l ">Courses:</h1>
        </div>
        <div className=" grid  grid-cols-2 md:grid-cols-4 ">
          <p className="font-normal text-sm md:text-l ">Mathematics</p>
          <p className="font-normal text-sm md:text-l ">Computer Science</p>
          <p className="font-normal text-sm md:text-l ">Physics</p>
          <p className="font-normal text-sm md:text-l ">Chemistry</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
