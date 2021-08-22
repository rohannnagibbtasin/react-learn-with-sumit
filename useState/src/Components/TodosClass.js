import React, { Component } from 'react';

export default class TodosClass extends Component {
    state = {
        todo: '',
        warning: null,
    };

    handleClick = (e) => {
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js')
            ? 'You need to Javascript skill to complete the task. Do you have it ?'
            : null;
        this.setState({ todo: inputValue, warning });
    };

    render() {
        const { todo, warning } = this.state;
        return (
            <div>
                <small>{todo}</small>
                <br />
                <input type="text" value={todo} onChange={this.handleClick} />
                <hr />
                <h2>{warning || 'Good choice!'}</h2>
            </div>
        );
    }
}
