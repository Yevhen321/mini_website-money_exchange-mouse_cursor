import React from 'react';

const TextArea = (props) => {
    return (
        <div className="text-left">
            {props.label && <label className="font-bold">{props.label}</label>}
            <textarea
                className="border-solid border-2 rounded-md border-blue-700 py-2 px-4 outline-none focus:border-blue-600 focus:border-transparent w-full resize-none"
                {...props}
            />
        </div>
    )
}

export default TextArea