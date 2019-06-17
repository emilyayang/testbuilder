// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
//   
//   Compare the length first, and just return the network based on the length
//   compare the first two chars 

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // 
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  // 
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  
  if(cardNumber.length === 14){
  	let chars = Number(cardNumber.slice(0,2));
  	let chars2 = Number(cardNumber.slice(0,4));

  	if(chars === 38 || chars === 39){
  		return "Diner's Club"
  	}else if(chars2 === 5018 || chars2 === 5020 || chars2 === 6304 || chars2 === 5038){
  		return "Maestro"
  	}
  }else if(cardNumber.length === 12 || cardNumber.length === 13 || cardNumber.length === 15 || cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19){

  	let chars = Number(cardNumber.slice(0,2));
  	let chars2 = Number(cardNumber.slice(0,4));
  	let chars3 = Number(cardNumber.slice(0,3));
  	let chars6 = Number(cardNumber.slice(0,6));

  	if(cardNumber[0] === '4'){
  		if (chars2 === 4903 || chars2 === 4905 || chars2 === 4911 || chars2 === 4936) {
  			return 'Switch'
  		} else {
  		    return 'Visa'
  		}
  	}else if(chars6 === 633110 || chars6 === 564182 || chars2 === 6333 || chars2 === 6759){
  		return 'Switch'
  	}else if(chars === 51 || chars === 52 || chars === 53 || chars === 54 || chars === 55){
  		return 'MasterCard'
  	}else if(chars2 === 6011 || chars3 === 644 || chars3 === 645 || chars3 === 646 || chars3 === 647 || chars3 === 648 || chars3 === 649 || chars === 65){
  		return "Discover"
  	}else if(chars2 === 5018 || chars2 === 5020 || chars2 === 6304 || chars2 === 5038){
  		return "Maestro"
  	}else if(chars === 34 || chars === 37){
  		return "American Express"
  	}else if((chars6 >= 622126 && chars6 <= 622925) || (chars3 >= 624 && chars3 <= 626) || (chars2 >= 6282 && chars2 <= 6288)){
  		return 'China UnionPay'
  	}
  }
};


