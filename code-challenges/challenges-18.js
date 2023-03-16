'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
    let lengthh=0;
    let str2=str.split(' ');
    if(str2.length%2==0){
        lengthh=str2[str2.length/2].length
    }
    else{
        lengthh=str2[str2.length/2-.5].length
    }
    return lengthh
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
    let flag=false;
    let str11=str1.split("")
    let str22=str2.split("")
    if(str1.length==str2.length){
        for(let i=0;i<str11.length;i++){
        for(let j=0;j<str22.length;j++){
            if(str11[i]==str22[j]){
                str11.splice(i,1);
                str22.splice(j,1);
                //break;
                // console.log("str1",str11)
                // console.log("str2",str22)
            }
        }
        

    }
    
    }
    // console.log(str11);
    // console.log(str22);
    if(str11.length==str22.length &&str11[0]==str22[0]){
        flag=true

    }
    return flag;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
    let ind=0;
    let len=arr.length-1;
    arr.forEach((element,index,array)=>{
        if(element==int){
            ind=index
            
        }
        else if(array[index]<int && (array[index+1]>int || index==len)){
            arr.splice(index+1, 0,int);
            ind=index+1
           
        }
    })
    
return ind;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };