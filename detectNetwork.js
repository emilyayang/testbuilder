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

function createArr(){
      var arr = [];
      for(let i = 622126;  i<= 622925; i++){
        arr.push(i);
      }
      return arr;
};

// var detectNetwork = function(cardNumber) {
//   //loop through the obj twice to access key value pairs
//   //if cardnumber length matches length, look through prefix to find match
//   var numberCheck;
//   var cards = {

//     "Diner's Club":{ "Prefix": [38, 39], "Length": [14] },
//     "American Express":{ "Prefix": [37, 34], "Length": [15]},
//     "Visa":{ "Prefix": [4], "Length": [13, 16, 19]},
//     "MasterCard":{ "Prefix": [51, 52, 53, 54, 55], "Length": [16]},
//     "Discover":{ "Prefix": [[6011], [644, 645, 646, 647, 648, 649], [65]], "Length": [16, 19] },
//     "Maestro":{ "Prefix": [5018, 5020, 5038, 6304], "Length": [12, 13, 14, 15, 16, 17, 18, 19]},
//     "China UnionPay":{ 
//       "Prefix":[createArr(), [624, 625, 626], [6282, 6283, 6284, 6285, 6286, 6287, 6288]],
//       "Length": [16, 17, 18, 19]
//     },
//     "Switch":{ "Prefix": [[4903, 4905, 4911, 4936, 6333, 6759], [564182, 633110]], "Length": [16, 18, 19]},
  
//   }

//   for(var prop in cards){
//     var card = cards[prop];
//     var prefix = card['Prefix'];
//     var exclude = [4903, 4905, 4911, 4936]
    
//     if(Array.isArray(prefix[0])){
//         for(let l = 0 ; l < prefix.length ; l++){ 
//           var len = prefix[l][0].toString().length;
//           var cardNumPrefix = Number(cardNumber.slice(0,len)); 
//           if(prefix[l].includes(cardNumPrefix)){
//             numberCheck = true;

//             if(numberCheck && card['Length'].includes(cardNumber.length)){
//               return prop;
//             }        
//           }
//       }
//     }else{
//         var len = (prefix[0]).toString().length;
//         var cardNumPrefix = Number(cardNumber.slice(0,len));
        
//         if(cardNumPrefix === 4){
//           if(exclude.includes(Number(cardNumber.slice(0,4)))){
//             numberCheck = true
//             if(numberCheck && card['Length'].includes(cardNumber.length)){
//                 return 'Switch';
//               }
//           }else{
//             return 'Visa';
//           }
//         }else if(prefix.includes(cardNumPrefix) && card['Length'].includes(cardNumber.length)){
//           numberCheck = true
//           if(numberCheck && card['Length'].includes(cardNumber.length)){
//               return prop;

//       }
//       }
//     }
//   }
// }

var detectNetwork = function(cardNumber) {
  var cards = {

    "Diner's Club":{ "Prefix": [38, 39], "Length": [14] },
    "American Express":{ "Prefix": [37, 34], "Length": [15]},
    "Visa":{ "Prefix": [4], "Length": [13, 16, 19]},
    "MasterCard":{ "Prefix": [51, 52, 53, 54, 55], "Length": [16]},
    "Discover":{ "Prefix": [[6011], [644, 645, 646, 647, 648, 649], [65]], "Length": [16, 19] },
    "Maestro":{ "Prefix": [5018, 5020, 5038, 6304], "Length": [12, 13, 14, 15, 16, 17, 18, 19]},
    "China UnionPay":{ 
      "Prefix":[createArr(), [624, 625, 626], [6282, 6283, 6284, 6285, 6286, 6287, 6288]],
      "Length": [16, 17, 18, 19]
    },
    "Switch":{ "Prefix": [[4903, 4905, 4911, 4936, 6333, 6759], [564182, 633110]], "Length": [16, 18, 19]},
  
  }
  //loop through cards to access card
  //if cardnumber[0] === 4
    //if slice cardnumber 4 equals 4903, 4905, 4911, 4936 return switch, else return visa
  //else if prefix[0] is array then
    //loop through again to prefix arrays
      //determine length of prefix[0]
      //slice off the first length of nums that equal prefix[0] length
      //if prefix includes numprefix, return card
  //else determine length of prefix[0]
    //slice off the first length of nums that equal prefix[0] length
    //if prefix includes numprefix, return card
    for (var key in cards) {
      var card = cards[key];
      var exclude = [4903, 4905, 4911, 4936]
      if (cardNumber[0] === '4') { //cardNumber[0] === '4'
          if(exclude.includes(Number(cardNumber.slice(0,4))) && cards['Switch']['Length'].includes(cardNumber.length)){
            return "Switch";
           } else {
            return "Visa";
          }
      }
      if (Array.isArray(card["Prefix"][0])) {
        for (var j = 0; j < card["Prefix"].length; j++) {
          var length = card["Prefix"][j][0].toString().length; //needs to be string not num for length
          var pre = Number(cardNumber.slice(0,length));//needs to be num to compare to values
          if (card["Prefix"][j].includes(pre) && card["Length"].includes(cardNumber.length)) {  
            return key;
          }
        }
      } else {
          var length = card["Prefix"][0].toString().length;
          var pre = Number(cardNumber.slice(0,length));
          if (card["Prefix"].includes(pre) && card["Length"].includes(cardNumber.length)) {
            return key;
        }
      }
    }
}

// var detectNetwork = function(cardNumber) {
//   // Note: `cardNumber` will always be a string
//   // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
//   // The American Express network always starts with a 34 or 37 and is 15 digits long
//   // 
//   // Visa always has a prefix of 4 and a length of 13, 16, or 19.
//   // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
//   // 
//   // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
//   // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
//   // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
//   // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

//   // Once you've read this, go ahead and try to implement this function, then return to the console.
  
//   if(cardNumber.length === 14){
//    let chars = Number(cardNumber.slice(0,2));
//    let chars2 = Number(cardNumber.slice(0,4));

//    if(chars === 38 || chars === 39){
//      return "Diner's Club"
//    }else if(chars2 === 5018 || chars2 === 5020 || chars2 === 6304 || chars2 === 5038){
//      return "Maestro"
//    }
//   }else if(cardNumber.length === 12 || cardNumber.length === 13 || cardNumber.length === 15 || cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19){

//    let chars = Number(cardNumber.slice(0,2));
//    let chars2 = Number(cardNumber.slice(0,4));
//    let chars3 = Number(cardNumber.slice(0,3));
//    let chars6 = Number(cardNumber.slice(0,6));

//    if(cardNumber[0] === '4'){
//      if (chars2 === 4903 || chars2 === 4905 || chars2 === 4911 || chars2 === 4936) {
//        return 'Switch'
//      } else {
//          return 'Visa'
//      }
//    }else if(chars6 === 633110 || chars6 === 564182 || chars2 === 6333 || chars2 === 6759){
//      return 'Switch'
//    }else if(chars === 51 || chars === 52 || chars === 53 || chars === 54 || chars === 55){
//      return 'MasterCard'
//    }else if(chars2 === 6011 || chars3 === 644 || chars3 === 645 || chars3 === 646 || chars3 === 647 || chars3 === 648 || chars3 === 649 || chars === 65){
//      return "Discover"
//    }else if(chars2 === 5018 || chars2 === 5020 || chars2 === 6304 || chars2 === 5038){
//      return "Maestro"
//    }else if(chars === 34 || chars === 37){
//      return "American Express"
//    }else if((chars6 >= 622126 && chars6 <= 622925) || (chars3 >= 624 && chars3 <= 626) || (chars2 >= 6282 && chars2 <= 6288)){
//      return 'China UnionPay'
//    }
//   }
// };


