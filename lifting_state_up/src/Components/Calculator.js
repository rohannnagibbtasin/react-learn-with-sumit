import React, { Component } from 'react';
import { convert, toCelsius, toFarenheit } from '../lib/Converter';
import Boiling from './Boiling';
import Input from './Input';

export default class Calculator extends Component {
    state = {
        temparature: '',
        scale: 'c',
    };

    handleChange = (e, scale) => {
        this.setState({
            temparature: e.target.value,
            scale,
        });
    };

    render() {
        const { temparature, scale } = this.state;
        const celcius = scale === 'f' ? convert(temparature, toCelsius) : temparature;
        const farenheit = scale === 'c' ? convert(temparature, toFarenheit) : temparature;
        return (
            <div>
                <Input scale="c" temparature={celcius} onTemparatureChange={this.handleChange} />
                <Input scale="f" temparature={farenheit} onTemparatureChange={this.handleChange} />
                <Boiling celcius={parseFloat(temparature)} />
            </div>
        );
    }
}

// export default function Calculator() {
//     return (
//         <div>
//             <Input scale="c" />
//             <Input scale="f" />
//             {/* <Boiling celcius={parseFloat(temparature)} /> */}
//         </div>
//     );
// }
