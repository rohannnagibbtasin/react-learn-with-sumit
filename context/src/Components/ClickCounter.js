import React from 'react';

// export default class ClickCounter extends React.Component {
//     render() {
//         const { clicked, clickHandler } = this.props;
//         return (
//             <div>
//                 <button type="button" onClick={clickHandler}>
//                     {clicked} times clicked
//                 </button>
//             </div>
//         );
//     }
// }

// export default withCounter(ClickCounter);

export default function ClickCounter({ clicked, clickHandler }) {
    return (
        <div>
            <button type="button" onClick={clickHandler}>
                {clicked} times clicked
            </button>
        </div>
    );
}
