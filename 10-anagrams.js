/*Anagrams

Write a function that creates an anagram list, listing all rearrangements 
of a given word.  
For example, if user types "east", program should list all 24 permuations, including:
"eats", "etas", "teas" and non-words like "tsae".

Hint: for your algorithm, you might want to think about a prefix and use that to create
new words. For example, given "east", use "e" as a prefix and place it in front of all 
6 permutations of "ast": "ast", "ats", "sat", "tas", "tsa" which will you give you:
                        "east", "eats", "esat", "etas" and "etsa"

Continue this way until you find all the remaining words for "est".
For "east" there should be 24 words.*/
//anagrams receives a string
//returns every possible permutation of those characters

function getAllPermutations(string) {
    let results = [];
  
    if (string.length === 1) {
      results.push(string);
      return results;
    }
  
    for (let i = 0; i < string.length; i++) {
      let firstChar = string[i];
      let charsLeft = string.substring(0, i) + string.substring(i + 1);
      let innerPermutations = getAllPermutations(charsLeft);
      for (let j = 0; j < innerPermutations.length; j++) {
        results.push(firstChar + innerPermutations[j]);
      }
    }
    return results;
  }
  
  getAllPermutations('east')
