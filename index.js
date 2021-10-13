// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return (fare) => fare * multiplier;
}

// const fareDoubler = createFareMultiplier(2);

function fareDoubler(fare) {
    const x = createFareMultiplier(2)
    return x(fare);
}

function fareTripler(fare) {
    const x = createFareMultiplier(3)
    return x(fare);
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}