import React from 'react'
import {Link} from 'react-router-dom'

function Header({expand, toggleExpand, setExpand}) {
  return (
    <header>
        <div className='container flex align-center f-space-between'>
            <p className='logo' onClick={()=>setExpand(false)} ><Link to="/what-2-cook/">What2Cook</Link></p>
            <button className='btn-icon toggler' onClick={()=>toggleExpand()}>
              <i class="fa-solid fa-bars"></i>
            </button>
            <nav className={expand ? 'expanded' : ''}>
                <ul className='flex nav-menu'>
                    <li onClick={()=>setExpand(false)}><i class="fa-solid fa-kitchen-set"></i><Link to='/byingridient'>Recipes Based on ingredient</Link></li>
                    <li onClick={()=>setExpand(false)}><i class="fa-regular fa-bookmark"></i><Link to='/bookmarked'>Saved Recipes</Link></li>
                </ul>
            </nav>
        </div>

    </header>
  )
}

export default Header