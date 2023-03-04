import React from 'react'

function NutritionBox({calories, protein, fat, carbs}) {
  return (
    <div className='nutritionbox flex f-space-between'>
        <p>{protein?.amount}{protein?.unit} protein</p>
        <p>{fat?.amount}{fat?.unit} fat</p>
        <p>{carbs?.amount}{carbs?.unit} carbs</p>
    </div>
  )
}

export default NutritionBox