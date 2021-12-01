import React from 'react';
import image from '../assets/images/logo-DH.png';
import {NavLink, Link, Route, Switch} from 'react-router-dom';

function SideBar() {
    return (
        <React.Fragment>
            <ul className='navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion' id='accordionSidebar'>
                <a className='sidebar-brand d-flex align-items-center justify-content-center' href='/'>
                    <div className='sidebar-brand-icon'>
                        <img className='w-100' src={image} alt='Digital House' />
                    </div>
                </a>

                <hr className='sidebar-divider my-0' />

                <li className='nav-item active'>
                    <NavLink className='nav-link collapsed' to='/'>
                        <i className='fas fa-fw fa-tachometer-alt'></i>
                        <span>Dashboard - DH movies</span>
                    </NavLink>
                </li>

                <hr className='sidebar-divider' />

                <div className='sidebar-heading'>Actions</div>

                <li className='nav-item'>
                    <NavLink className='nav-link collapsed' to='/GenresInDb'>
                        <i className='fas fa-fw fa-folder'></i>
                        <span>Genres</span>
                    </NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink className='nav-link' to='/LastMovieInDb'>
                        <i className='fas fa-fw fa-chart-area'></i>
                        <span>Last Movies</span>
                    </NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink className='nav-link' to='/ContentRowMovies'>
                        <i className='fas fa-fw fa-table'></i>
                        <span>Movies</span>
                    </NavLink>
                </li>

                <hr className='sidebar-divider d-none d-md-block' />
            </ul>
        </React.Fragment>
    );
}
export default SideBar;
