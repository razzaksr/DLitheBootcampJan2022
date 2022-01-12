
import React from "react";
import List from "./List";

// function App()
// {
//     return(
//         <>
//             <h1>Functional components are new to you guys</h1>
//             <hr color='blue'/>{/*  hr- element , color properties */}
//             {/* //java,c#,c,c++ comments
//             #python comment
//             <!-- html --> */}
//             <ol style={{backgroundColor:'red'}}>
//                 <li>HTML</li><li>CSS</li><li>JS</li><li>Bottstrap</li>
//             </ol>
//         </>
//     );
// }

// // fat arraow function with name of vaibhav
// const vaibhav=()=>{
//     alert("mouse entered");
// }

// // json/ data
// const kalpana={
//     color:'white',
//     backgroundColor:'blue'
// }

// // app fat arrow function
// const App=()=>
// {
//     return(
//         <>
//             <h1 style={kalpana}>Functional components are new to you guys</h1>
//             <hr color='blue'/>{/*  hr- element , color properties */}
//             {/* //java,c#,c,c++ comments
//             #python comment
//             <!-- html --> */}
//             <ol style={{backgroundColor:'red'}}>
//                 <li>HTML</li><li>CSS</li><li>JS</li><li onMouseEnter={vaibhav}>Bootstrap</li>
//             </ol>
//         </>
//     );
// }

const App=()=>{
    return(
        <>
            <List/>
        </>
    );
}

export default App;