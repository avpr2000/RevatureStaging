function runRedundant() {
  const f1 = redundant("apple");
  //f1() --> "apple";
  const f2 = redundant("pear");
  //f2() --> "pear";
  const f3 = redundant("");
  //f3() --> ""
  console.log(f1);
  console.log(f2);
  console.log(f3);
}

function runSubstr() {
  // Vowels
  console.log(getVowelSubstrings("apple"));
  console.log(getVowelSubstrings("orange"));
  console.log(getVowelSubstrings("AFRICA"));
  console.log(getVowelSubstrings("ANIME"));
  console.log(getVowelSubstrings("adventure"));
  console.log(getVowelSubstrings("envelope"));
  console.log(getVowelSubstrings("hmm"));
  // --> []
  // Consonants
  console.log(getConsonantSubstrings("aviation"));
  console.log(getConsonantSubstrings("motor"));
  console.log(getConsonantSubstrings("fireboard"));
  console.log(getConsonantSubstrings("Tuesday"));
  console.log(getConsonantSubstrings("fourteen"));
  console.log(getConsonantSubstrings("beautiful"));
  //--> ["n", "t", "tion", "v", "viat", "viation"]
  //-->["m", "mot", "motor", "r", "t", "tor"]
}