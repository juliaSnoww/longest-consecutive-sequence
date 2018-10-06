module.exports = function longestConsecutiveLength(array) {
    let count = 1;
    let temp = [];
    for (let i = 0; i < array.length; i++){
        if (array[i]===array[i+1]-1){
            count++;
        } if (array[i]!== array[i+1]-1 ) {
            if (count!== 1) {temp.push(count)};
            count = 1;
        }
    }
    if (array.length === 0 ) return 0;
    else if(Math.max.apply(null,temp) === -Infinity ) return 1;
    else return Math.max.apply(null,temp);
};
