export default function Boiling({ celcius = 0 }) {
    if (celcius >= 100) {
        return <p>The water will be boil</p>;
    }
    return <p>The water will not be boil</p>;
}
