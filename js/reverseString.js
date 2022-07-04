function solution(str) {
  if (str === '') return '';
  else return solution(str.substring(1)) + str.charAt(0);
}

console.log(solution('world'));
console.log(solution('word'));
