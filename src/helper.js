
// get calculation between years
export function getYearsBetween(year) {
    return new Date().getFullYear() - year;
}


// calculation to pay according to the car brand
export function calculateBrand(brand) {
    let increment;

    switch(brand) {
        case 'european':
            increment = 1.30;
            break;
        case 'american':
            increment = 1.15;
            break;
        case 'asian':
            increment = 1.05;
            break;
        default:
            break;
    }
    return increment;
}

// calculation type of insurance packeage
export function getPackeage(packeage) {
    return (packeage === 'third-party') ? 1.20 : 1.50
}

// Capital letters summary
// export function capitalLetter(text) {
//     return text.charAt(0).toUpperCase() + text.slice(1);
// }