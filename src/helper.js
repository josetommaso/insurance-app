
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