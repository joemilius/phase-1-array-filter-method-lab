// Code your solution here
function findMatching(array, name){
    let noCaseDriver = array.filter(function(driver){return driver.toLowerCase() === name.toLowerCase()})
    let noDrivers = []
    if (noCaseDriver){
        return noCaseDriver
    }else if (array.filter(function(driver){return driver !== name})){
        return noDrivers
    }

}

function fuzzyMatch(array, name){
    return array.filter(function(driver){return driver[0,1] === name[0,1]})
}

function matchName(array, person){
     return (array.filter(function(driver){return driver.name === person}))


}