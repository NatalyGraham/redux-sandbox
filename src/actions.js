import getRandom from "./utils/randomizer";

export const inc = () => ({type: 'INC'});

export const dec = () => ({type: 'DEC'});

export const rndINC = () => {
    return {
        type: 'RNDINC',
        payload : getRandom(10)
    }
};

export const rndDEC = () => {
    return {
        type: 'RNDDEC',
        payload: getRandom(10)
    }
};