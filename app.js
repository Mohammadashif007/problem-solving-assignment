// 1. First problem

// function cubeNumber(number) {
//     if (typeof number !== "number") {
//         return "Arguments must be Number";
//     }
//     return number * number * number;
// }

// console.log(cubeNumber(4));

// 2. Second problem

// function matchFinder(string1, string2) {
//     if (typeof string1 !== "string" || typeof string2 !== "string") {
//         return "Both arguments must be string";
//     }

//     return string1.includes(string2);

// }
// console.log(matchFinder("Peter parker", 7));

// 3. Third problem

function sortMaker(arr){
    let largestSequence = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i+1] && arr[i] >= 0 && arr[i+1] >= 0){
            largestSequence.push(arr[i]);
            largestSequence.push(arr[i+1]);
            break

        }
        else if(arr[i] == arr[i+1]){
            return "equal";
        }
        else if(arr[i] < 0 || arr[i+1] < 0){
            return "Invalid Input";
        }
        else {
            largestSequence.push(arr[i+1]);
            largestSequence.push(arr[i]);
            break
        }
    }
    return largestSequence;

}

console.log(sortMaker([4, 10]));

// 4. Fourth problem

// function findAddress(obj){
//     const street = obj.street;
//     const house = obj.house;
//     const society = obj.society;
//     if(house == null && society == null){
//         return (street+","+ "__" +","+"__");
//     }
//     else if(house == null){
//         return (street +","+ "__" +","+society);
//     }
//     return (street +","+ house +","+society);
// }

// console.log(findAddress({ street: "10",house: "15A", society: "Earth Perfect"}))

// 5. Five problem

// function canPay(changeArray, totalDue) {
//     if (changeArray.length == 0) {
//         return "Array must have value";
//     }
//     else {
//         let myBalance = 0;
//         for (let i = 0; i < changeArray.length; i++) {
//             myBalance += changeArray[i];
//         }
//         if (myBalance < totalDue) {
//             return false;
//         }
//         return true;
//     }

// }

// console.log(canPay([1,,4,5], 10));
