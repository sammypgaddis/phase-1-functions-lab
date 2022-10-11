// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {
    const hqBlock = 42;
    let difference = pickUp - hqBlock;
    let numberOfBlocks = Math.abs(difference);
    return numberOfBlocks;
    
};

//function distanceFromHqInFeet(numberOfBlocks)
function distanceFromHqInFeet(blocksToFeet) {
    let blockDifferenceResults = distanceFromHqInBlocks(blocksToFeet);
    let totalFeet = blockDifferenceResults * 264;
    return totalFeet;
}
console.log(distanceFromHqInFeet(41));

function distanceTravelledInFeet(start, destination) {
    let distance = destination - start;
    let absoluteDistance = Math.abs(distance);
    let distanceTravelledInFeet = absoluteDistance * 264;
    return distanceTravelledInFeet;
}

function calculatesFarePrice(start, destination) {
    let totalFeet = (destination - start) *264;
        if (totalFeet <= 400) {
            return 0;
        } else if (totalFeet > 400 && totalFeet <= 2000) {
            return .02 * (totalFeet - 400);
        } else if (totalFeet > 2000 && totalFeet <= 2500) {
            return 25;
        } else {
            return 'cannot travel that far';
        }
}
console.log(calculatesFarePrice(18,34));
