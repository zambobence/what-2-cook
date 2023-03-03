import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
        <div className='container flex align-center f-space-between'>
            <p className='logo'><Link to="/">What2Cook</Link></p>
            <button className='btn-icon toggler'>
              <i class="fa-solid fa-bars"></i>
            </button>
            <nav>
                <ul className='flex nav-menu'>
                    <li><i class="fa-solid fa-kitchen-set"></i><Link to='/byingridient'>Based on ingredient</Link></li>
                    <li><i class="fa-regular fa-bookmark"></i><Link to='/bookmarked'>Saved Recipes</Link></li>
                </ul>
            </nav>
        </div>

    </header>
  )
}

export default Header