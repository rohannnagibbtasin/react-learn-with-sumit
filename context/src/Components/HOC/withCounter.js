import React from 'react';

const withCounter = (OriginalComponent) => {
    class NewComponent extends React.Component {
        state = {
            clicked: 0,
        };

        clickHandler = () => {
            this.setState((prev) => ({ clicked: prev.clicked + 1 }));
        };

        render() {
            const { clicked } = this.state;

            return <OriginalComponent clicked={clicked} clickHandler={this.clickHandler} />;
        }
    }
    return NewComponent;
};

export default withCounter;
