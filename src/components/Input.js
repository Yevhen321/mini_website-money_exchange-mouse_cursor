import React from 'react';

const Input = (props) => {
    return (
        <div className="text-left">
            {props.label && <label className="font-bold">{props.label}</label>}
            <input
                className="border-solid border-2 rounded-md border-blue-700 py-2 px-4 outline-none focus:border-blue-600 focus:border-transparent w-full"
                {...props}
            />
        </div>
    )
}

export default Input