
function countFrequency(arr) {
    const frequency = {};
    
    arr.forEach(item => {
        frequency[item] = (frequency[item] || 0) + 1;
    });
    
    return frequency;
}
const inputArray = ['a', 'b', 'a', 'c', 'b', 'a'];
const result = countFrequency(inputArray);

console.log(result);
