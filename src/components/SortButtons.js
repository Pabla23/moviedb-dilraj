import React from 'react';
import {NavLink} from 'react-router-dom';

function SortButtons() {
    return(
        <div className="sort-buttons">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/sort/popular">Popular</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sort/top-rated">Top Rated</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sort/now-playing">Now Playing</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sort/upcoming">Upcoming</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SortButtons;