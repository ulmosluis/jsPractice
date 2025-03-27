const fs = require('fs');
const path = require('path');

// Function to count words in a file
function countWordsInFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        const wordCounts = {};
        const words = data.toLowerCase().match(/\b\w+\b/g);

        if (words) {
            words.forEach(word => {
                wordCounts[word] = (wordCounts[word] || 0) + 1;
            });

            const sortedWordCounts = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

            const output = sortedWordCounts.map(([word, count]) => `${word}: ${count}`).join('\n');

            const outputFilePath = path.join(__dirname, 'wordCountsOutput.txt');
            fs.writeFile(outputFilePath, output, 'utf8', (err) => {
                if (err) {
                    console.error('Error writing to the file:', err);
                } else {
                    console.log(`Word counts have been written to ${outputFilePath}`);
                }
            });
        } else {
            console.log('No words found in the file.');
        }
    });
}

// Replace with the path to your file
const filePath = path.join(__dirname, 'bicarbonateSoude.txt');
countWordsInFile(filePath);