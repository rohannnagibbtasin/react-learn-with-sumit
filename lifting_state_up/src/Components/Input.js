const ScaleName = {
    c: 'Celcius',
    f: 'Farenheit',
};
// export default class Input extends Component {
//     // state = {
//     //     temparature: '',
//     // };

//     // onTemparature = (e) => {
//     //     this.setState({
//     //         temparature: e.target.value,
//     //     });
//     // };

//     render() {
//         const { temparature, onTemparatureChange, scale } = this.props;
//         return (
//             <fieldset>
//                 <legend>Enter temparature in {ScaleName[scale]}</legend>
//                 <input type="text" value={temparature} onChange={onTemparatureChange} />
//             </fieldset>
//         );
//     }
// }

export default function Input({ temparature, onTemparatureChange, scale }) {
    return (
        <fieldset>
            <legend>Enter temparature in {ScaleName[scale]}</legend>
            <input
                type="text"
                value={temparature}
                onChange={(e) => onTemparatureChange(e, scale)}
            />
        </fieldset>
    );
}
