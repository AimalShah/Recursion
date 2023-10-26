
const merge = (leftArr , rightArr) => {
    const result = [];
    
    let lI = 0;
    let rI = 0;
    
    while(lI < leftArr.length && rI < rightArr.length){
        if(leftArr[lI] < rightArr[rI]) {
            result.push(leftArr[lI]);
            lI++;
        } else {
          result.push(rightArr[rI]);
          rI++;
        }
    }
    while(lI < leftArr.length){
        result.push(leftArr[lI]);
        lI++;
    }
    while(rI < rightArr.length){
        result.push(rightArr[rI]);
        rI++;
    }
    
    return result;
}

const mergeSort = (arr) => {
    if(arr.length === 0) return "empty array";
    if(arr.length === 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0 ,mid);
    const right = arr.slice(mid ,arr.length);
    
    return merge(mergeSort(left) , mergeSort(right));
}
console.log(mergeSort([1,11,9,8])); // [1,8,9,11]
console.log(mergeSort([])); // empty array
console.log(mergeSort([30, 20, 10, 50, 22, 33, 55])); // [10,20,22,30,33,50,55]