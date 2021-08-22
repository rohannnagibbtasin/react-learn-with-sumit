export function toCelsius(f) {
    return ((f - 32) * 5) / 9;
}

export function toFarenheit(c) {
    return (c * 9) / 5 + 32;
}

export function convert(temparatue, convertTo) {
    const input = parseFloat(temparatue);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convertTo(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
