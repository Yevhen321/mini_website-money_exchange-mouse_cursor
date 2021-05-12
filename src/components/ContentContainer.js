import React from 'react';
import WrapperForForm from "./Card";

const ContentContainer = ({children}) => {
    return (
        <WrapperForForm className="shadow-2xl">
            <div className="max-w-3xl w-full my-0 mx-auto flex items-center flex-col flex-1 pt-10">{children}</div>
        </WrapperForForm>
    )
}

export default ContentContainer;