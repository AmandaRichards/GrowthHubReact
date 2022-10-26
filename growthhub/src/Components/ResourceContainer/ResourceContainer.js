
import React, { useEffect, useState } from "react";
const [resources, setResources] = useState(null);

function ResourceContainer(){
useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `api/Resource/GetAll`
      );
      const data = await response.json();
      setResources(data);
    }
    fetchData();
  }, []);

  console.log(resources)
}

export default ResourceContainer;