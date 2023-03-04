import React from 'react'

function TimeCalBox({data}) {
  return (
    <div className='flex f-center'>
          <p><i className="fa-regular fa-clock icon"></i>{data.readyInMinutes} min</p>
          <p><i className="fa-solid fa-fire icon"></i>{data.caloriesObj?.amount}</p>
          <p><i class="fa-solid fa-utensils icon"></i>{data.servings}</p>
    </div>
  )
}

export default TimeCalBox