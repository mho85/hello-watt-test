export const computeAvg = (data) => {
    return data.reduce((acc, el) => acc + el.kwh_consumed, 0) / data.length;
}
export const computeMin = (data) => {
    return data.reduce((acc, el) => Math.min(acc, el.kwh_consumed), data[0].kwh_consumed);
}
export const computeMax = (data) => {
    return data.reduce((acc, el) => Math.max(acc, el.kwh_consumed), data[0].kwh_consumed);
}