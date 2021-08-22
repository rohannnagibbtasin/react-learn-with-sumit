import { useState } from 'react';

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

export default function Todo() {
    const [todo, toHandler] = useState({
        title: '',
        description: '',
    });
    const { title, description } = todo;
    return (
        <div>
            <small>{title}</small>
            <p>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => {
                        toHandler({ ...todo, title: e.target.value });
                    }}
                />
            </p>
            <br />
            <input
                type="text"
                value={description}
                onChange={(e) => {
                    toHandler({ ...todo, description: e.target.value });
                }}
            />
            <hr />
        </div>
    );
}
