function sortMaker(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            return "Array value must be positive";
        }
    }
    return arr.sort(function(a,b){
        return b-a;
    });
}

console.log(sortMaker([-55, 96]));