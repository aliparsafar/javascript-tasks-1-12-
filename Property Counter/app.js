function countProperties(obj) {
    let count = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            count++; 
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                count += countProperties(obj[key]); 
            }
        }
    }

    return count;
}
const obj = {
    name: 'ali',
    age: 24,
    address: {
        street: '12 Main St',
        city: 'ahwaz'
    },
    contact: {
        email: 'aliparsafar.code@gmail.com',
        phone: '0916773947'
    }
};
console.log(countProperties(obj));
