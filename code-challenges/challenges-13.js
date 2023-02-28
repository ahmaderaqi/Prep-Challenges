'use strict';

// Important Note: 
// Kindly use reduce instead of for in all of your solutions

// Resource:
// Reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
// 
// Given an array of objects, count the objects by using reduce method.

// Input:
// var voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ]
//
// Output: 5

const objectCounter = (obj) => {
    // write your code here
    let sum = obj.reduce((acc, val, idx) => {
        acc = acc + 1;
        return acc;
    }, 0);
    return sum;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Given a string input as an argument reverse it using reduce method.
//
// Input: 'you shall not pass' 
// Output: 'pass not shall you'
//
// Hint:
// since you need to reverse words, you may get some use of the methods
// you learnt before to split the string to words
//
// ------------------------

const stringReverse = (str) => {
    // write your code here
    let str2 = str.split(' ');
    //console.log(str2);
    let str3 = "";
    let reverse = str2.reduce((acc, value, index) => {
        str3 = str2[str2.length - index - 1];
        if(str2.length-index-1==0){
            acc += `${str3}`;
        }
        else{
            acc += `${str3} `;
        }
        
        
        str3 = "";
        return acc;
    },"")
    return reverse;

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
// 
// Using the same array of objects from the first question, create new object that contains the candidates names as keys (voting for),
// and how many times they got voted to as values using the reduce method.
//
// Input:
// let voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ];
//
// Output:
// let res = {
//     James: 1,
//     Jade: 2,
//     Bailey: 2
// };
//

const statistics = (obj) => {
    // write your code here
    let vote={
        James:0,
        Jade:0,
        Bailey:0
    }
    let sum = obj.reduce((acc, val, idx) => {
        if(!acc.hasOwnProperty(val.votes_To)){
            acc[val.votes_To]=1;
        }
         else{
             acc[val.votes_To]++;
        }
        
        return acc;
    }, {});
    
    return sum;
}
// -------------------------------------------------------------------------------------------------------


module.exports = { objectCounter, stringReverse, statistics };