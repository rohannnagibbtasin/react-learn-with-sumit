// import React, { useReducer } from 'react';
// eslint-disable-next-line import/no-cycle
// import ComponentA from './Components/ComponentA';
import GetPost2 from './Components/GetPost2';

// export const counterContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//     switch (action) {
//         case 'increment':
//             return state + 1;
//         case 'decrement':
//             return state - 1;
//         default:
//             return state;
//     }
// };
// export default function App() {
//     const [count, dispatch] = useReducer(reducer, initialState);
//     return (
//         <div>
//             <div>Count: {count}</div>
//             <counterContext.Provider value={{ countDispatch: dispatch }}>
//                 <ComponentA />
//             </counterContext.Provider>
//         </div>
//     );
// }
export default function App() {
    return <GetPost2 />;
}
