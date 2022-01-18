function vowelsAndConsonants(s) {
    let vowelLetters = [];
let constLetters = [];
for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
  vowelLetters.push(s[i]);
  }
  if (s[i] !== 'a' && s[i] !== 'e' && s[i] !== 'i' && s[i] !== 'o' && s[i] !== 'u') {
  constLetters.push(s[i])
  }
}
//return (vowelLetters + ',' + constLetters)
let result = (vowelLetters + ',' + constLetters).split(',');
result.forEach((item) => console.log(item));
}