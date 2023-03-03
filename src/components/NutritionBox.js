import React from 'react'

function NutritionBox({calories, protein, fat, carbs}) {
  return (
    <div className='nutritionbox flex f-space-between'>
        <p>{protein?.amount} protein</p>
        <p>{fat?.amount} fat</p>
        <p>{carbs?.amount} carbs</p>
    </div>
  )
}

export default NutritionBox