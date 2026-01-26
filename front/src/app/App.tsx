import React from "react";
import "./App.css";
import Rick from "@public/Rick Rubin1.jpg";

export const App = () => {
    return (
        <React.Fragment>
            <h1>Rick Rubin</h1>
            <img 
                src={Rick} alt="Rick Rubin" 
                height={"600px"} width={"auto"}
            />
        </React.Fragment>
    );
};


