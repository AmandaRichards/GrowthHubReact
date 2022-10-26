import React from 'react'
import css from './SearchBar.module.css';
import {useState, useEffect} from 'react';

const SearchBar = () => {

    const [search, setSearch] = useState("");
    const [results, setResults] = useState(null);

    useEffect(() => {
        async function fetchData() {
          const response = await fetch(
            `api/Subject/GetByName`
          );
          const data = await response.json();
          setResults(data.data);
        }
        fetchData();
      }, [search]);

      function handleClick(){
        setSearch('input')
      }

  return (
    <div class={css.search}>
    <input placeholder="Search" class={css.searchBar} />
    <button class={css.searchButton} onClick={handleClick}>Search</button>
</div>
  )
}

export default SearchBar;


//set up a get by name route in the database 
//onclick set the search term to be the input field value
//make an api call when the search term changes