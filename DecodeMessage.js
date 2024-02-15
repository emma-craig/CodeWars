const decode = (messageFile) => {
    const fs = require('fs');

    const lines = fs.readFileSync(messageFile, 'utf8').split('\n');

    let decodedMessage = [];
    let index = 0;
    // Iterate through each line of the pyramid
    for (i = 0; i < lines.length; i++) {
        // Split the line into numbers and words
        const [nums, word] = lines[i].split(' ');
        const num = parseInt(nums);

        // Append the word corresponding to the current number in the pyramid
        decodedMessage.push(word);

        // Increment the index by the number of elements in this line
        index += num;

        // Check if we have reached the end of the pyramid
        if (index >= lines.length) {
            break;
        }
    }

    // Join the decoded words into a single string
    return decodedMessage.join(' ');
}

// Test the function
console.log(decode('./coding'));
