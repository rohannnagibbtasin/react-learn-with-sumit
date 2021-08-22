import React from 'react';

function Button({ handleClick, children }) {
    console.log(`rendering button ${children}(button component)`);
    return (
        <p>
            <button type="button" onClick={handleClick}>
                {children}
            </button>
        </p>
    );
}
export default React.memo(Button);
