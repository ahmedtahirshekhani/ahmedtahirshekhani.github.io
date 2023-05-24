const EduSection = () => {
  return (
    <div>
      <div>
        <div className="md:grid md:grid-cols-3 gap-4">
          <div className="col-span-2 mx-2">
            <div className="text-2xl font-bold">
              Lahore University of Management Sciences (LUMS)
            </div>
          </div>
          <div>
            <div className="text-0.5xl md:text-2xl font-medium mx-2">Sep 2019 - Jun 2023</div>
          </div>
        </div>
        <div className="italic mx-2 my-2">
          BS Computer Science -{" "}
          <strong className="text-primary ">CGPA - 3.75/4.0</strong>
        </div>
        <div>
          <div className="my-5 font-medium text-primary mx-2">Courses:</div>
          <div>
            <div className=" mx-2 md:grid md:grid-cols-4 gap-4">
              <div>
                <ul className="list-disc">
                  <li>Software Engineering</li>
                  <li>Machine Learning</li>
                  <li>Computer Vision</li>
                  <li>Artificial Intelligence</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc">
                  <li>Operating Systems</li>
                  <li>Database Systems</li>
                  <li>Data Science</li>
                  <li>Algorithms</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc">
                  <li>Data Structures and Science</li>
                  <li>Blockchain</li>
                  <li>Network Security</li>
                  <li>Distributed Systems</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc">
                  <li>Network Centric Computing</li>
                  <li>Business Communication</li>
                  <li>Economics</li>
                  <li>Linear Algebra</li>
                  <li>Calculus</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-5 mx-2" />
      <div>
        <div className="md:grid md:grid-cols-3 gap-4 mx-2">
          <div className="col-span-2 ">
            <div className="text-2xl font-bold ">
              Beaconhouse College Campus North
            </div>
          </div>
          <div>
            <div className="text-0.5xl md:text-2xl font-medium ">Sep 2017 - May 2019</div>
          </div>
        </div>
        <div className="italic mx-2 my-2">
          Cambridge A Levels - {""}
          <strong className="text-primary">Grade: 4 straight As</strong>
        </div>
        <div>
          <div className="my-2 font-bold text-primary mx-2">Subjects: </div>
          <div className="mx-2">Computer, Mathematics, Physics, Chemistry</div>
        </div>
      </div>
      <hr className="my-5 mx-2" />
      <div>
        <div className=" mx-2 md:grid md:grid-cols-3 gap-4 ">
          <div className="col-span-2">
            <div className="text-2xl font-bold">BVS Parsi High School</div>
          </div>
          <div>
            <div className="text-0.5xl md:text-2xl font-medium">Aug 2011 - May 2017</div>
          </div>
        </div>
        <div className="italic mx-2 my-1">
          Ordinary Level (O'Level Cambridge) - {""}
          <strong className="text-primary">Grade: 1 A*, 8 A's, 1 B</strong>
        </div>
        <div>
          <div className="my-2 font-bold text-primary mx-2">Subjects: </div>
          <div className="mx-2 text-justify">
            Computer, Mathematics, Additional Mathematics, Physics, Chemistry,
            Biology, Urdu, English, Islamiat, Pakistan Studies
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduSection;
