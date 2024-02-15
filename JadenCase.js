// titleCase each word in a string
//split string into an array
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(" ")
    .toString();
};

//or String.prototype.toJadenCase = function () {
return this.split(" ")
  .map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
  .join(" ");

//   or
return this.split(" ")
  .map((item) => item[0].toUpperCase() + item.slice(1))
  .join(" ");
