import React from 'react'

export default function SearchBar() {
  return (
    <form> 
          <label for="search-query">Search</label>
          <input type="text"  name="search-query" id="search-query"/>
          <input type="submit" name="search" id="search"/>
    </form>
  
  )
}
