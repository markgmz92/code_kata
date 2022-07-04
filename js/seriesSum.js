const SeriesSum = (n) => {
  let total = 0;

  for (i = 0; i < n; i++) {
    total = total + 1 / (1 + i * 3);
  }
  return total.toFixed(2);
};

console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(3));
console.log(SeriesSum(4));
