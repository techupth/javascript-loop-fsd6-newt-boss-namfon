// Exercise #3: Find a Minimum Score
let studentScores = [100, 20, 3, 100];
let minScore = 10;
// Start coding here

for (let i = 0; i < studentScores.length; i++) {
  if (studentScores[i] < minScore) {
    minScore = studentScores[i];
  }
}

console.log(minScore);
