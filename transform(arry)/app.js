function transformArray(arr) {
    return arr.map(str => {
        return { length: str.length };
    });
}

const stringArray = ["ali", "banana", "book"];
const transformedArray = transformArray(stringArray);

console.log(transformedArray);

