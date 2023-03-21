import React from 'react'

function Instructions({instructions}) {

  return (
    <div className='instructions'>
        <h3>Instructions:</h3>
        {instructions?.includes('<ol>') ? 
            <div dangerouslySetInnerHTML={{ __html: instructions}}>
            </div>
            : 
            <p className='instructions'>{instructions}</p>
        }
    </div>
  )
}

export default Instructions