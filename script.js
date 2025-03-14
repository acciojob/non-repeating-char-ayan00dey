function firstNonRepeatedChar(str) {
    // Step 1: Create a frequency map
    const charCount = {};

    // Count the frequency of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 2: Find the first character with frequency 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // Step 3: Return null if no non-repeating character is found
    return null;
}

// Get user input and display the result
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
