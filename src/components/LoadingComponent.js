import React from 'react'
import LoadingImg from '../img/loading.png'
function LoadingComponent() {
  return (
    <div className='loading-component'>
        <img src={LoadingImg} className='loading-img' alt='loading' />
    </div>
  )
}

export default LoadingComponent