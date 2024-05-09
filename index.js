//Array reduce transformation
nums=[1,2,3,4,5];
// console.log(nums.reduce(sum,0));
// function sum(accumulator,value){
//     return accumulator=value;

// }
const fn=(init,value)=>init+value;
//const sum=(accum,curr)=>accum=curr+value;
const sum=(accum,curr)=>0;
var reduce=function(nums,fn,init){
    if (nums.length==0){
    return init;
}
let result=init;
//for(const item of nums)
  nums.forEach((element)=>{
    result=fn(result,element);
})
return result;
};
//nums=[];
console.log(reduce(nums,fn,54));