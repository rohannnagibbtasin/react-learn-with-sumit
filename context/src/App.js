import React, { Component } from 'react';
import ClickCounter from './Components/ClickCounter';
import Counter from './Components/Counter';
import Section from './Components/Section';
import ThemeContext from './contexts/themeContext';
//     return (
//         <div>
//             {/* <HoverCounter /> */}
//             {/* <ClickCounter /> */}
//             <Counter
//                 render={(clicked, clickHandler) => (
//                     <ClickCounter clicked={clicked} clickHandler={clickHandler} />
//                 )}
//             />
//             <Section />
//         </div>
//     );
// }

export default class App extends Component {
    state = {
        theme: 'dark',
    };

    render() {
        const { theme } = this.state;
        return (
            <div>
                <Counter
                    render={(clicked, clickHandler) => (
                        <ClickCounter clicked={clicked} clickHandler={clickHandler} />
                    )}
                />
                <ThemeContext.Provider value={theme}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}
