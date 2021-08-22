import ReactDom from 'react-dom';
import App from './App';

// const states = []; // [0:[value,setter],1:[value,setter]]
// let stateIndex = -1;

// function useState(defaultValue) {
//     // eslint-disable-next-line no-plusplus
//     const index = ++stateIndex;
//     if (states[index]) return states[index];
//     const setValue = (newValue) => {
//         states[index][0] = newValue;
//         // eslint-disable-next-line no-use-before-define
//         Tasin();
//     };

//     const returnArray = [defaultValue, setValue];

//     states[index] = returnArray;
//     return returnArray;
// }

// export default function Todo() {
//     const [todo, toHandler] = useState('');
//     const [warning, warningHandler] = useState(null);
//     const handleClick = (e) => {
//         const inputValue = e.target.value;
//         const warnin = inputValue.includes('.js')
//             ? 'You need to Javascript skill to complete the task. Do you have it ?'
//             : null;
//         toHandler(inputValue);
//         warningHandler(warnin);
//     };
//     return (
//         <div>
//             <small>{todo}</small>
//             <br />
//             <input type="text" value={todo} onChange={handleClick} />
//             <hr />
//             <h2>{warning || 'Good choice!'}</h2>
//         </div>
//     );
// }

// function Tasin() {
//     stateIndex = -1;
ReactDom.render(<App />, document.getElementById('root'));
// }

// Tasin();
