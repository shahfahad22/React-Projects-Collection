import React from 'react'

function Header() {
  return (
    <div>
        <nav className='mainContainer'>
            <div className='logo'>
                <h2>Logo</h2>
            </div>
            <div className="lists">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header
