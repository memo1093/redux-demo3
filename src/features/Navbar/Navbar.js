import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() { 
    return (
        <nav>
            <section>
              <h1>React Essentials Example</h1>   
              <div className="navContent">
                  <Link to="/">Posts</Link>
              </div>
            </section>
           
        </nav>
    )
}

export default Navbar   
