const lostSheep = (friday, saturday, total) =>
  total -
  friday.reduce((total, el) => (total += el), 0) -
  saturday.reduce((total, el) => (total += el), 0);

//   or
return friday.concat(saturday).reduce((s, l) => s - l, total);
