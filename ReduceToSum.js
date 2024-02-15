const reduceToSum = (arr) => {
  return arr.reduce((total, num) => {
    const rollingTotal = total + num;
    return rollingTotal;
  }, 0);
};

