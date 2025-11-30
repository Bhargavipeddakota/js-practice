
// This program simulates dice rolls according to a probability distribution
// and displays statistics about the frequency of each face

// Dice emoji for each face
const diceEmoji = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

// Function to parse command line arguments and get number of rolls
function getNumRolls() {
  return parseInt(Deno.args[0]) || 100;
}

// Function to get probability distribution from command line arguments
function getProbabilityDistribution() {
  const probDistribution = [];

  if (Deno.args.length > 1) {
    // Parse probability arguments (must sum to 1)
    let sum = 0;
    for (let i = 1; i <= 6; i++) {
      const prob = parseFloat(Deno.args[i]) || 0;
      probDistribution.push(prob);
      sum += prob;
    }

    // Validate that probabilities sum to approximately 1
    if (Math.abs(sum - 1) > 0.01) {
      console.log(
        'Warning: Probabilities do not sum to 1. Using equal distribution.'
      );
      probDistribution.length = 0; // Clear invalid distribution
    }
  }

  // If no valid distribution provided, use equal probability
  if (probDistribution.length !== 6) {
    probDistribution.length = 0; // Clear any partial data
    for (let i = 0; i < 6; i++) {
      probDistribution.push(1 / 6);
    }
  }

  return probDistribution;
}

// Function to roll a dice according to the probability distribution
function rollDice(probabilities) {
  const random = Math.random();
  let cumulativeProb = 0;

  for (let i = 0; i < probabilities.length; i++) {
    cumulativeProb += probabilities[i];
    if (random < cumulativeProb) {
      return i + 1; // Face value (1-6)
    }
  }

  return 6; // Fallback (should rarely happen due to floating point precision)
}

// Function to perform multiple dice rolls
function performRolls(numRolls, probDistribution) {
  const rolls = [];
  for (let i = 0; i < numRolls; i++) {
    rolls.push(rollDice(probDistribution));
  }
  return rolls;
}

// Function to display dice rolls in columns
function displayRolls(rolls) {
  const columnSize = 10; // Number of dice per column
  const numColumns = Math.ceil(rolls.length / columnSize);

  console.log(`\n🎲 ${rolls.length} Dice Rolls 🎲\n`);

  for (let row = 0; row < columnSize; row++) {
    let rowString = '';
    for (let col = 0; col < numColumns; col++) {
      const index = col * columnSize + row;
      if (index < rolls.length) {
        const faceValue = rolls[index];
        rowString += diceEmoji[faceValue - 1] + ' ';
      }
    }
    console.log(rowString);
  }
}

// Function to calculate frequency of each dice face
function calculateFrequency(rolls) {
  const frequency = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < rolls.length; i++) {
    frequency[rolls[i] - 1]++;
  }
  return frequency;
}

// Function to display frequency statistics
function displayStatistics(frequency, numRolls, probDistribution) {
  console.log('\n📊 Frequency Table 📊');
  console.log('Face | Count | Percentage | Expected % | Difference');
  console.log('-----|-------|------------|------------|------------');

  for (let face = 1; face <= 6; face++) {
    const count = frequency[face - 1];
    const percentage = ((count / numRolls) * 100).toFixed(2);
    const expected = (probDistribution[face - 1] * 100).toFixed(2);
    const difference = (percentage - expected).toFixed(2);
    const diffString = difference >= 0 ? `+${difference}` : difference;

    console.log(
      `${face}    | ${count
        .toString()
        .padEnd(5)} | ${percentage}%      | ${expected}%      | ${diffString}%`
    );
  }

  console.log(`\nTotal rolls: ${numRolls}`);
}

// Function to display usage instructions
function displayUsage() {
  console.log('\nUsage: deno run dice.js [numRolls] [p1 p2 p3 p4 p5 p6]');
  console.log('Where p1...p6 are probabilities for each face (must sum to 1)');
}

// Main function to coordinate the program flow
function main() {
  const numRolls = getNumRolls();
  const probDistribution = getProbabilityDistribution();
  const rolls = performRolls(numRolls, probDistribution);
  displayRolls(rolls);
  const frequency = calculateFrequency(rolls);
  displayStatistics(frequency, numRolls, probDistribution);
  displayUsage();
}

// Execute the program
main();
