import React, { useEffect, useState } from "react";
import Resource from "../Resource/Resource";
import css from './ResourceContainer.module.css'


function ResourceContainer({subject}){

  const [resources, setResources] = useState(null);

useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `api/Resource/search/${subject}`
      );
      const data = await response.json();
      setResources(data.data);
    }
    fetchData();
  }, []);

  console.log(resources)

  return (
  <div className={css.resourceContainer}>
  {resources
      ? resources.map((resource) => {
          return <Resource Name={resource.resourceName} key={resource.resourceId} Id={resource.resourceId} Link={resource.resourceLink} />;
        })
      : `Loading Data...`}
</div>
  )
}

export default ResourceContainer;