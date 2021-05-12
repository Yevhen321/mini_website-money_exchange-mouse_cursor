import React from 'react';
import {Link } from "react-router-dom";

const links = [
    {
        url: '/blog',
        title: 'My Blog',
        className: "rotate-2"
    },
    {
        url: '/figure',
        title: 'Figure'
    },
    {
        url: '/convert',
        title: 'Convert'
    }
]

const Header = () => (
    <header className="bg-blue-700 py-3">
        <div className="max-w-2xl flex justify-between m-0 m-auto text-white font-sans text-xl">
            {links.map((link, index) =>
                <Link
                    key={index}
                    className={link.className}
                    to={link.url}
                >
                    {link.title}
                </Link>
            )}
        </div>
    </header>
);

export default Header;