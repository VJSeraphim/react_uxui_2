import React from 'react'

import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img 
                src={logo}
                alt="logo"
                className="w-[124px] h-[32px]"
            />
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, i) => (
                    <li
                        key={nav.i}
                        className={`font-poppins font-normal cursor-pointer 
                        text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} 
                        text-white mr-10`}
                    >
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar