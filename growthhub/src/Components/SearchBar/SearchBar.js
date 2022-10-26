import React from 'react'
import css from './SearchBar.module.css';
import {useState, useEffect} from 'react';
import Resource from '../Resource/Resource';

const SearchBar = () => {

    const [search, setSearch] = useState("");
    const [results, setResults] = useState(null);

    useEffect(() => {
        async function fetchData() {
          const response = await fetch(
            `api/Resource/GetByName{search}`
          );
          const data = await response.json();
          setResults(data.data);
        }
        fetchData();
      }, [search]);

      function handleClick(e){
        setSearch(e.target.value)
      }

  return (
    <div class={css.search}>
    <input placeholder="Search" class={css.searchBar}  />
    <button class={css.searchButton} onClick={handleClick}>Search</button>
    {results?  results.map((resource) => {
              return <Resource Link={resource.resourceLink} Name={resource.resourceName} key={resource.resourceId} />;
            })
          : null}
</div>
  )
}

export default SearchBar;


//set up a get by name route in the database DO THIS 
//onclick set the search term to be the input field value
//make an api call when the search term changes