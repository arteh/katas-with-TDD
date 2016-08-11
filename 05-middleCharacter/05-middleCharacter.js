function middleCharacter (str) {
  

  if (str.length <= 2) { return str; }
  if (str.length < 5) { return (str.slice(1, -1)); }

  return middleCharacter(str.slice(1, -1));


};





module.exports = middleCharacter;

