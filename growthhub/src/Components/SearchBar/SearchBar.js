import React from 'react'
import css from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div class={css.search}>
    <input placeholder="Search" class={css.searchBar} />
    <button class={css.searchButton}>Search</button>
</div>
  )
}

export default SearchBar