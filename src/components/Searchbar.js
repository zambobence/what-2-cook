import React from 'react'

function Searchbar({searchTerm, setSearchTerm, toggleSearch}) {
  return (
        <div className='searchbar flex'>
            <input 
              type="text" 
              className='search-input' 
              placeholder="Search for a recipe" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              aria-label="Recipe keyword"
            />
            <button 
              disabled={!searchTerm} 
              className='btn' 
              onClick={()=>toggleSearch()} 
              type="button">
              Search
            </button>
        </div>
)}

export default Searchbar