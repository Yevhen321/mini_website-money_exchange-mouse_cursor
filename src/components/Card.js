import React from 'react';

const Card = (props) => {
    return (
        <div className={`border-solid border-2 border-light-blue-500 border-opacity-3 rounded-lg my-8 mx-auto py-4 ${props.className && props.className}`}>
            {props.children}
        </div>
    )
}

export default Card;