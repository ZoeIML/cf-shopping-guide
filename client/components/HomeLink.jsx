import React from 'react'

import {Link} from 'react-router-dom'

const HomeLink = () => {
    return (
        <div className="home-link">
            <Link to={'/'}>Home</Link>
        </div>
    )
}


export default HomeLink