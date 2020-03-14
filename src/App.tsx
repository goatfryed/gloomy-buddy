import React from 'react';
import JSONTreeComponent from "react-json-tree";
import {GLOOM_DATA_URL} from "./config/config";
import {GloomyData} from "./config/GloomyData";
import {Game} from "./Game";

function corsAnywhereUrl(url:string) {
    return "https://cors-anywhere.herokuapp.com/" + url;
}

fetch(corsAnywhereUrl(GLOOM_DATA_URL)).then(value => console.log(value)).catch(e => console.log(e));

function App() {

    return (
        <div>
            {isDevelopment() && <JSONTreeComponent data={GloomyData}/>}
            <Game data={GloomyData} />
        </div>
    );
}

export default App;

export function isDevelopment() {
    return process.env.NODE_ENV === "development";
}
