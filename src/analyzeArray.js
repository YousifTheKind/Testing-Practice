function analyzeArray(arr) {
    const sum = arr.reduce((a, b) => a + b, 0);
    return {
        average: sum / arr.length || 0,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    };
}

export { analyzeArray };
