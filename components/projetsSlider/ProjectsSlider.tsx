import { useState } from 'react';
import Productsp from '../../assets/data/data';

const ProjectsSlider = () => {
  let [indexes, setIndexes] = useState([0, 1, 2]);
  let data:any = Productsp;
  return (
    <div>
      {data&& data.length > 0
        ? indexes.map((ind:any) => {
            return (
              <div key={ind}>
                <h1>{data[ind].name}</h1>
              </div>
            );
          })
        : ''}
    </div>
  );
};

export default ProjectsSlider;
