import React, { useState } from "react";

//let count=1;


const App=()=>{

    const [count, setCount]=useState(0);

const IncNum=()=>{
    setCount(count+1);

} 
    return (
        <>
            <h1>
                {count}
            </h1>
            <button onClick={IncNum}>
                click me
            </button>
        </>
    );
};

export default App;