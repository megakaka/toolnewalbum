export const getRightSuffixForNounWithNumber = (value: number, one: string, two: string, five: string) => {
    value %= 100;
    if (value >= 5 && value <= 20) {
        return five;
    }
    value %= 10;
    if (value === 1) {
        return one;
    }
    if (value >= 2 && value <= 4) {
        return two;
    }
    return five;
};

export const getRightWordForNounWithNumber = (value: number, one: string, two: string, five: string) => {
    value %= 100;
    if (value >= 5 && value <= 20) {
        return five;
    }
    value %= 10;
    if (value === 1) {
        return one;
    }
    if (value >= 2 && value <= 4) {
        return two;
    }
    return five;
};
