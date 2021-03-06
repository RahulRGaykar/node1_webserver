//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

/*
add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
*/


const addData=(val1,val2,callback)=>{
setTimeout(()=>{
const result = val1+val2
callback(result)
},2000)
}

addData(1,5,(result)=>{console.log(result)})

