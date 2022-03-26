// Find if a string has unique Characters

function isUnique(str) {
    // Your code here
    return [...str].length === [...new Set([...str])].length
    
}

