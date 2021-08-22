import ThemeContext from '../contexts/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

export default function Content() {
    return (
        <div>
            <h1>This is a content </h1>
            <Counter>
                {(clicked, clickHandler) => (
                    <ThemeContext.Consumer>
                        {({ theme }) => {
                            <HoverCounter
                                clicked={clicked}
                                clickHandler={clickHandler}
                                theme={theme}
                            />;
                        }}
                    </ThemeContext.Consumer>
                )}
            </Counter>
        </div>
    );
}
