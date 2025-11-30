function occurrences(string, substring) {
  if (substring.length === 0) {
    return 0;
  }
  let count = 0;
  for (let i = 0; i <= string.length - substring.length; i++) {
    let isSubstring = true;
    for (let j = 0; j < substring.length; j++) {
      if (string[i + j] !== substring[j]) {
        isSubstring = false;
      }
    }
    if (isSubstring) {
      count++;
    }
  }
  return count;
}

console.log(occurrences("ababc", "ab")); // 2
console.log(occurrences("", "a"));       // 0
console.log(occurrences("ab", "b"));     // 1
console.log(occurrences("aaa", "a"));    // 3
console.log(occurrences("abh", "b"));    // 1
console.log(occurrences("aaa", "aa"));   // 2 (overlapping works)