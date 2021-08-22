import React from 'react';

export default class ClickCounter extends React.Component {
    state = {
        clicked: 0,
    };

    clickHandler = () => {
        this.setState((prev) => ({ clicked: prev.clicked + 1 }));
    };

    render() {
        const { render } = this.props;
        const { clicked } = this.state;

        return render(clicked, this.clickHandler);
    }
}
