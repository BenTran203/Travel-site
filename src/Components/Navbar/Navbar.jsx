import React, {useState} from 'react';
import './navbar.scss';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    const [active, setActive] = useState('navBar');

    const showNav = () => {
        setActive('navBar activeNavbar');
    };

    const removeNavbar = () => {
        setActive('navBar');
    };

    return (
        <section className='navBarSection'>
            <header className='header flex'>
                <div className='logoDiv'>
                    <a href="#" className='logo'>
                        <h1><MdOutlineTravelExplore className='icon' /> Aussie Vacay.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className='nav-lists flex'>
                        <li className="nav-item">
                            <a href="#" className='nav-link'>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className='nav-link'>Packages</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className='nav-link'>Shop</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className='nav-link'>About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className='nav-link'>Page</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className='nav-link'>News</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className='nav-link'>Contact</a>
                        </li>
                        
                        <button className='btn'>
                            <a href="#">BOOK NOW</a>
                        </button>
                    </ul>
                    <div onClick={removeNavbar} className="close-nav-bar">
                        <IoIosCloseCircle className='icon'/>
                    </div>
                </div>
                <div onClick={showNav} className='toggle-nav-bar'>
                    <TbGridDots className='icon' />
                </div>
            </header>
        </section>
    );
};

export default Navbar;
