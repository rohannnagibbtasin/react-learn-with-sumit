import React from 'react';

function ShowCount({ count, title }) {
    console.log(`rendering ${title}(showCount Component)....`);
    return (
        <p>
            {title} is {count}
        </p>
    );
}
export default React.memo(ShowCount);
