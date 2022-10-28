import React, { useEffect, useState } from "react";
import css from "./SubjectContainer.module.css";
import Subject from "../Subject/Subject";


function SubjectContainer({search}) {

const [subjects, setSubjects] = useState(null);


  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `api/Subject/GetAll`
      );
      const data = await response.json();
      setSubjects(data.data);
    }
    fetchData();
  }, []);
  console.log(subjects);


  return (
    <div className={css.subjectContainer}>
      
      {subjects
          ? subjects.map((subject) => {
              return <Subject IconURL={subject.iconURL} Title={subject.name} key={subject.subjectId} page={subject.name}/>;
            })
          : `Loading Data...`}
    </div>
     
  )
}


  export default SubjectContainer;
  //Link={subject.name.toLowerCase()} 