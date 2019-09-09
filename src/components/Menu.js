import React from 'react';
import { Link } from 'react-router';

const Menu = () => {
    return (
        <div className="ui menu">
            <Link> className="item">Browse</Link>
            <Link className="item">Submit</Link>
            <Link className="right menu">
                <Link className="item">Sign Up</Link>
                <Link className="item">Help</Link>
            </Link>
        </div>
    )
}

export default Menu;
