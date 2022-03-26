// Unique Set of elements in an array

let arr = [1,2,4,5,6,7,2, 5,6]

const findUnique = (arr) => {    
    return [...new Set(arr)];
}

------------------------------------------------------------------------------------------------------------------------------------------------
// Find if a string has unique Characters

function isUnique(str) {
    // Your code here
    return [...str].length === [...new Set([...str])].length
    
}
------------------------------------------------------------------------------------------------------------------------------------------------
// Finding GCD

const gcd =(a,b) => (b===0) ? a : gcd(b, a%b);
------------------------------------------------------------------------------------------------------------------------------------------------

"asjdajskdjas1212".slice(0,-4). returns "asjdajskdjas" with last 4 chars sliced and "asjdajskdjas1212".slice(-4) return "1212", the last 4 characters
------------------------------------------------------------------------------------------------------------------------------------------------

// FLatten Nested Array
let arr = [ [ [ [1], 2], 3], [4], [], [[5]]]
function flatten(nestedArray) {
    // Your code here

    return nestedArray.reduce((acc, cur) => acc.concat(Array.isArray(cur)? flatten(cur): cur), []);
}

Ans: [1, 2, 3, 4, 5]

------------------------------------------------------------------------------------------------------------------------------------------------
// Remove Duplicates

function removeDupes(str) {
    // Your code here
    return [...new Set([...str])].join('');
}
removeDupes('aabbccdd') returns 'abcd'

------------------------------------------------------------------------------------------------------------------------------------------------

// Highest frequency string in the list of strings
function highestFrequency(strings) {

    let m = {};
    let max = 0;
    let hfStr = "";

    for (let str of strings) {
        // If the string is already in map, then increment count
        if(str in m) {
            m[[str]] =m[[str]] + 1;                               
        } else{
            m[[str]] = 1;
        }
        if (m[[str]] > max) {
            max = m[[str]];
            hfStr = str;
        }
    }       
    return hfStr;   
}
['a', 'b', 'c', 'c', 'd', 'e']	c	
['abc', 'def', 'abc', 'def', 'abc']	abc	
['abc', 'def']	abc	
['abc', 'abc', 'def', 'def', 'def', 'ghi' ghi
 
------------------------------------------------------------------------------------------------------------------------------------------------
 
