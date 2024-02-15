// do a loop dividing by 10 and using remanders

const expandedForm = (num) => {
  let digits = String(number).split("");
  return digits
    .map((digit, i) => {
      return Number(digit.concat("0".repeat(digits.length - i - 1)));
    })
    .filter((n) => n !== 0);
};
// or

num
  .toString()
  .split("")
  .reverse()
  .map((a, i) => a * Math.pow(10, i))
  .filter((a) => a > 0)
  .reverse()
  .join(" + ");
