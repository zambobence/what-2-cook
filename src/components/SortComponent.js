import React from 'react'

function SortComponent({setSortBy, sortBy}) {
  return (
    <div className='sort-container'>
            <span>Sort recipes by</span>
            <select className='sort-select' onChange={(e)=> setSortBy(e.target.value)} value={sortBy}>
                <option value={''}>{' '}</option>
                <option value={'caloriesObj'}>calories</option>
                <option value={'proteinObj'}>protein</option>
                <option value={'carbsObj'}>carbs</option>
                <option value={'fatObj'}>fat</option>
            </select>
        </div>
  )
}

export default SortComponent