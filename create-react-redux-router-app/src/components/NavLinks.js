import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = () => (
    <div>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Click'>Click</Link></li>
        <li><Link to='/Counter'>Counter</Link></li>
    </div>
)

export default NavLinks