import React from 'react';

const variants = {
    primary: 'bg-blue-500 hover:bg-blue-700',
    secondary: 'bg-gray-500 hover:bg-gray-700',
    warning: 'bg-red-500 hover:bg-red-700',
}

const Button = (props) => {
    return (
        <button
            {...props}
            className={`${variants[props.variant]} text-white font-bold py-2 px-4 rounded ${props.className && props.className}`}
        >
            {props.children}
        </button>
    )
}

export default Button;