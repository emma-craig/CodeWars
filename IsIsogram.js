// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

const isIsogram = (str) => {
  if (str.length === 0) return true;
  for (i = 0; i < str.length; i++) {
    str = str.toLowerCase();
    const sortedArray = [...str].sort();
    if (sortedArray[i] === sortedArray[i + 1]) {
      return false;
    }
  }
  return true;
};
