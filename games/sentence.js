// This program generates random sentences using a simple grammar
// Each grammar rule can be expanded into one of its productions

// Grammar rules defined as an object where each key is a rule
// and the value is an array of possible expansions
function createGrammar() {
  const grammar = {
    START: [['SENTENCE']],
    SENTENCE: [['NOUN_FRAGMENT', 'VERB_FRAGMENT']],
    NOUN_FRAGMENT: [
      ['ARTICLE', 'NOUN'],
      ['ARTICLE', 'ADJECTIVE', 'NOUN'],
    ],
    VERB_FRAGMENT: [['VERB'], ['VERB', 'NOUN_FRAGMENT']],
    ARTICLE: [['the'], ['a'], ['an']],
    ADJECTIVE: [['happy'], ['sad'], ['tall'], ['small'], ['beautiful']],
    NOUN: [['boy'], ['girl'], ['horse'], ['flower']],
    VERB: [['runs'], ['jumps'], ['sleeps'], ['sees'], ['likes']],
  };
  return grammar;
}

// Function to randomly select one production from an array of productions
function chooseRandomProduction(productions) {
  const randomIndex = Math.floor(Math.random() * productions.length);
  return productions[randomIndex];
}

// Function to check if a symbol is terminal (actual word) or non-terminal (needs expansion)
function isTerminal(symbol) {
  // If the symbol is lowercase, it's a terminal (actual word)
  return symbol === symbol.toLowerCase();
}

// Function to expand a symbol according to grammar rules
function expandSymbol(symbol, grammar) {
  // If it's a terminal, return it as is
  if (isTerminal(symbol)) {
    return symbol;
  }

  // Otherwise, find the rule for this symbol
  const productions = grammar[symbol];
  if (!productions) {
    console.log(`Error: No rule found for symbol ${symbol}`);
    return '';
  }

  // Choose one production randomly
  const chosenProduction = chooseRandomProduction(productions);

  // Expand each symbol in the chosen production
  let result = [];
  for (let i = 0; i < chosenProduction.length; i++) {
    const expanded = expandSymbol(chosenProduction[i], grammar);
    result.push(expanded);
  }

  return result.join(' ');
}

// Generate a sentence by starting with the START rule
function generateSentence() {
  const grammar = createGrammar();
  return expandSymbol('START', grammar);
}

// Display multiple sentences
function displaySentences(count) {
  for (let i = 1; i <= count; i++) {
    const sentence = generateSentence();
    console.log(`Sentence ${i}: ${sentence}`);
  }
}

// Get the number of sentences to generate from command line arguments
// Default to 5 if no argument is provided
let sentenceCount = 5;
if (Deno.args.length > 0) {
  sentenceCount = parseInt(Deno.args[0]);
  if (isNaN(sentenceCount) || sentenceCount <= 0) {
    console.log('Please provide a positive number for sentence count');
    sentenceCount = 5;
  }
}

console.log('Generating random sentences using grammar rules:');
console.log('------------------------------------------------');
displaySentences(sentenceCount);