import React from 'react';
import './App.css';
import {BlogContextProvider} from "./context/blogContext";
import MainRouter from "./router/mainRouter";

const App = () => (
    <BlogContextProvider>
        <MainRouter />
    </BlogContextProvider>
);

export default App;
