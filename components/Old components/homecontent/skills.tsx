import cpp from "../../assets/images/logos/cpp.png";
import c from "../../assets/images/logos/c.png";
import haskell from "../../assets/images/logos/haskell.png";
import node from "../../assets/images/logos/nodelogo.png";
import react from "../../assets/images/logos/react.png";
import next from "../../assets/images/logos/next.png";
import angular from "../../assets/images/logos/angular.png";
import golang from "../../assets/images/logos/golang.png";
import python from "../../assets/images/logos/python.png";
import solidity from "../../assets/images/logos/solidity.png";
import flask from "../../assets/images/logos/flask.png";
import django from "../../assets/images/logos/django.png";

import Image from "next/image";

const HomeSkills = () => {
  return (
    <div>
    <div className="avatar m-2">
      <div className="w-32 rounded-lg bg-white p-3">
        <Image src={c} alt={"C"} />
      </div>
    </div>
    <div className="avatar m-2">
      <div className="w-32 rounded-lg bg-white">
        <Image src={angular} alt={"Angular JS"} />
      </div>
    </div>
    <div className="avatar m-2">
      <div className="w-32 rounded-lg bg-white">
        <Image src={haskell} alt={"Haskell"} />
      </div>
    </div>
    <div className="avatar m-2">
      <div className="w-32 rounded-lg bg-white p-2">
        <Image src={node} alt={"node"}/>
      </div>
    </div>
    <div className="avatar m-2">
      <div className="w-32 rounded-lg bg-white">
        <Image src={react} alt={"react"} />
      </div>
    </div>
    <div className="avatar m-2">
      <div className="w-32 rounded-lg bg-white p-2">
        <Image src={next} alt={"Next JS"} />
      </div>
    </div>
    <div className="avatar m-2">
      <div className="w-32 rounded-lg bg-white p-2">
        <Image src={cpp} alt={"C++"} />
      </div>
    </div>
    <div className="avatar m-2">
      <div className="w-32 rounded-lg bg-white">
        <Image src={golang} alt={"golang"}/>
      </div>
    </div>
    
    <div className="avatar m-2">
      <div className="w-32 rounded-lg bg-white ">
        <Image src={solidity} alt={"solidity"}/>
      </div>
    </div>
    <div className="avatar m-2">
      <div className="w-32 rounded-lg bg-white">
        <Image src={python} alt={"python"} className="object-contain p-1"/>
      </div>
    </div>
    <div className="avatar m-2">
      <div className="w-32 rounded-lg bg-white p-2">
        <Image src={flask} alt={"flask"}/>
      </div>
    </div>
    <div className="avatar m-2">
      <div className="w-32 rounded-lg bg-white p-2">
        <Image src={django} alt={"django"}/>
      </div>
    </div>
    </div>
  );
};

export default HomeSkills;
