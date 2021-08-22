import React from 'react';

// export default class HoverCounter extends React.Component {
//     render() {
//         const { clicked,clickHandler } = this.props;
//         return (
//             <div>
//                 <h1 onMouseOver={clickHandler}>{clicked} times clicked</h1>
//             </div>
//         );
//     }
// }

// export default withCounter(HoverCounter);

export default function HoverCounter({ clicked, clickHandler, theme }) {
    const style = theme === 'dark' ? { backgroundColror: '#000', color: '#fff' } : null;
    return (
        <div>
            <h1 style={style} onMouseOver={clickHandler}>
                {clicked} times clicked
            </h1>
        </div>
    );
}
