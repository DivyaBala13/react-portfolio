import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav style={{padding:"1 rem", background:"#f4f4f4"}}>
            <Link to ="/" style={{marginRight:'1 rem'}}>Home</Link>
            <Link to ="/cart">Cart</Link>
        </nav>
    )
}

export default Navbar