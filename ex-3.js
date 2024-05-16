// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
minScore = Infinity;
for (let s of scores) {
  if (s < minScore) {
    minScore = s;
  }
}
console.log(minScore);
