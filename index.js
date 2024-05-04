
function sum(fromN, toN) {
  if (fromN === toN) {
    return fromN;
  } else {
    return fromN + sum(fromN + 1, toN)
  }
}

module.exports = sum;

// sum(1, 3) => return 1 + sum (1+1, 3) => return 1 + 5
// sum(2, 3) => return 2 + sum (2+1, 3) => return 2 + 3
// sum(3, 3) => return 3
