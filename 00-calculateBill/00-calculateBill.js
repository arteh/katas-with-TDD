function calculateBill (bill, vatRate, tipRate) {

  //the function takes 3 arguments,

  //calculate the vat to be added (vatrate / 100 * bill)
  
  vatRate = +vatRate / 100 * +bill;     //nb you can add plus sings to change a string to a number
  
  //calculate the tip to be added (tiprate / 100 * bill)
  
  tipRate = +tipRate / 100 * +bill;

  //add all together
  
  //format to 2 decimal places
  //add the £ sign
  
  return '£' + (+bill + vatRate + tipRate).toFixed(2);
  
  //return it
  
  

}

module.exports = calculateBill;


