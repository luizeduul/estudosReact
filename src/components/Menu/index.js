import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './styles';

function Menu() {
    return (
        <Nav>
            <Link to="/">
                Home
            </Link>
            <Link to="/posts">
                Posts
            </Link>
        </Nav>
    )
}

export default Menu;