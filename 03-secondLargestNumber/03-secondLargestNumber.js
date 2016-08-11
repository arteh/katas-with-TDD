
function secondLargestNumber(array){
  if (!Array.isArray(array)) {
    return undefined;
  }
  else {
    array = array.filter(function (elem) {
        return typeof(elem) === "number" || typeof(elem) === "string";
      }).map(function (elem) {
        return +elem;
      }).filter(function (elem) {
        return typeof(elem) === "number";
      }).sort((a,b) => b - a);
    if (array[0] === array[array.length - 1]) {
      return undefined;
    }
    else {
      array = array.filter(function (elem, i){
        return array.indexOf(elem) === i;
      });
      return array[1];
    }
  }
}






module.exports = secondLargestNumber;