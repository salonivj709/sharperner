let nums = [1,3,-1,-3,5,3,6,7];
let k=3;

let result = [];
for(let i=0; i<=nums.length-k; i++){
    let max = nums[i];
    for(let j=1; j<k; j++){
        if(nums[i+j]>max){
            max = nums[j+i];
        }
    }
    result.push(max);
}
console.log(result);