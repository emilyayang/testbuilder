/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 


  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num%2 === 0;
    }
    return even(10) === true; //true === true
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678909123') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.should;
 
  it('has a prefix of 51', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {

  var should = chai.should();
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.

  
  // for (let prefix = 644; prefix <= 649; prefix++) {  
  //   (function(prefix) {    
  //     it('has a prefix of ' + prefix + ' and a length of 16', function(){
  //       detectNetwork(prefix+'123456789111').should.equal('Discover')
  //     });    
  //     it('has a prefix of ' + prefix + ' and a length of 19', function(){
  //       detectNetwork(prefix+'123456789111111').should.equal('Discover')
  //     });  
  //   })(prefix)}

  it('has a prefix of 6011 and a length of 16', function(){
    detectNetwork('6011567891011123').should.equal('Discover')
  });
  it('has a prefix of 6011 and a length of 19', function(){
    detectNetwork('6011111111111111222').should.equal('Discover')
  });
  it('has a prefix of 65 and a length of 16', function(){
    detectNetwork('6511567891011123').should.equal('Discover')
  });
  it('has a prefix of 65 and a length of 19', function(){
    detectNetwork('6511111111111111222').should.equal('Discover')
  });
    it('has a prefix of 644 and a length of 16', function(){
    detectNetwork('6441567891011123').should.equal('Discover')
  });
    it('has a prefix of 645 and a length of 16', function(){
    detectNetwork('6451567891011123').should.equal('Discover')
  });
    it('has a prefix of 646 and a length of 16', function(){
    detectNetwork('6461567891011123').should.equal('Discover')
  });
    it('has a prefix of 647 and a length of 16', function(){
    detectNetwork('6471567891011123').should.equal('Discover')
  });
    it('has a prefix of 648 and a length of 16', function(){
    detectNetwork('6481567891011123').should.equal('Discover')
  });
    it('has a prefix of 649 and a length of 16', function(){
    detectNetwork('6491567891011123').should.equal('Discover')
  });
    it('has a prefix of 644 and a length of 19', function(){
    detectNetwork('6441567891011123111').should.equal('Discover')
  });
  it('has a prefix of 645 and a length of 19', function(){
    detectNetwork('6451567891011123111').should.equal('Discover')
  });
    it('has a prefix of 646 and a length of 19', function(){
    detectNetwork('6461567891011123111').should.equal('Discover')
  });
    it('has a prefix of 647 and a length of 19', function(){
    detectNetwork('6471567891011123111').should.equal('Discover')
  });
    it('has a prefix of 648 and a length of 19', function(){
    detectNetwork('6481567891011123111').should.equal('Discover')
  });
    it('has a prefix of 649 and a length of 19', function(){
    detectNetwork('6491567891011123111').should.equal('Discover')
  });

});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  var should = chai.should();
    it('has a prefix of 5018 and a length of 12', function(){
    detectNetwork('501812345678').should.equal('Maestro')
  });
    it('has a prefix of 5018 and a length of 13', function(){
    detectNetwork('5018123456789').should.equal('Maestro')
  });
    it('has a prefix of 5018 and a length of 14', function(){
    detectNetwork('50181234567891').should.equal('Maestro')
  });
    it('has a prefix of 5018 and a length of 15', function(){
    detectNetwork('501812345678912').should.equal('Maestro')
  });
    it('has a prefix of 5018 and a length of 16', function(){
    detectNetwork('5018123456789129').should.equal('Maestro')
  });
    it('has a prefix of 5018 and a length of 17', function(){
    detectNetwork('50181234567891291').should.equal('Maestro')
  });
    it('has a prefix of 5018 and a length of 18', function(){
    detectNetwork('501812345678912911').should.equal('Maestro')
  });
    it('has a prefix of 5018 and a length of 19', function(){
    detectNetwork('5018123456789129111').should.equal('Maestro')
  });

    it('has a prefix of 5020 and a length of 12', function(){
    detectNetwork('502012345678').should.equal('Maestro')
  });
    it('has a prefix of 5020 and a length of 13', function(){
    detectNetwork('5020123456789').should.equal('Maestro')
  });
    it('has a prefix of 5020 and a length of 14', function(){
    detectNetwork('50201234567891').should.equal('Maestro')
  });
    it('has a prefix of 5020 and a length of 15', function(){
    detectNetwork('502012345678912').should.equal('Maestro')
  });
    it('has a prefix of 5020 and a length of 16', function(){
    detectNetwork('5020123456789129').should.equal('Maestro')
  });
    it('has a prefix of 5020 and a length of 17', function(){
    detectNetwork('50201234567891291').should.equal('Maestro')
  });
    it('has a prefix of 5020 and a1 length of 18', function(){
    detectNetwork('502012345678912911').should.equal('Maestro')
  });
    it('has a prefix of 5020 and a length of 19', function(){
    detectNetwork('5020123456789129111').should.equal('Maestro')
  });  

    it('has a prefix of 5038 and a length of 12', function(){
    detectNetwork('503812345678').should.equal('Maestro')
  });
    it('has a prefix of 5038 and a length of 13', function(){
    detectNetwork('5038123435678').should.equal('Maestro')
  });
    it('has a prefix of 5038 and a length of 14', function(){
    detectNetwork('50381234563378').should.equal('Maestro')
  });
    it('has a prefix of 5038 and a length of 15', function(){
    detectNetwork('503812343335678').should.equal('Maestro')
  });
    it('has a prefix of 5038 and a length of 16', function(){
    detectNetwork('5038123433356748').should.equal('Maestro')
  });
    it('has a prefix of 5038 and a length of 17', function(){
    detectNetwork('50381234333564478').should.equal('Maestro')
  });
    it('has a prefix of 5038 and a length of 18', function(){
    detectNetwork('503812343335644478').should.equal('Maestro')
  });
    it('has a prefix of 5038 and a length of 19', function(){
    detectNetwork('5038123433354444678').should.equal('Maestro')
  });
    it('has a prefix of 6304 and a length of 12', function(){
    detectNetwork('630412345678').should.equal('Maestro')
  });
    it('has a prefix of 6304 and a length of 13', function(){
    detectNetwork('6304123435678').should.equal('Maestro')
  });
    it('has a prefix of 6304 and a length of 14', function(){
    detectNetwork('63041234563378').should.equal('Maestro')
  });
    it('has a prefix of 6304 and a length of 15', function(){
    detectNetwork('630433563344578').should.equal('Maestro')
  });
    it('has a prefix of 6304 and a length of 16', function(){
    detectNetwork('6304234333567484').should.equal('Maestro')
  });
    it('has a prefix of 6304 and a length of 17', function(){
    detectNetwork('63042343335644784').should.equal('Maestro')
  });
    it('has a prefix of 6304 and a length of 18', function(){
    detectNetwork('630412343335644478').should.equal('Maestro')
  });
    it('has a prefix of 6304 and a length of 19', function(){
    detectNetwork('6304123433354444678').should.equal('Maestro')
  });

});


describe('China UnionPay', function() {
// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  var should = chai.should();

  for (let prefix = 622126; prefix <= 622925; prefix++) {  
    (function(prefix) {    
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        detectNetwork(prefix+'2345678910').should.equal('China UnionPay')
      }); 
    })(prefix)};    
  for (let prefix = 622126; prefix <= 622925; prefix++) {  
    (function(prefix) {    
      it('has a prefix of ' + prefix + ' and a length of 17', function(){
        detectNetwork(prefix+'23456785364').should.equal('China UnionPay')
       }); 
    })(prefix)};     
  for (let prefix = 622126; prefix <= 622925; prefix++) {  
    (function(prefix) {    
      it('has a prefix of ' + prefix + ' and a length of 18', function(){
        detectNetwork(prefix+'234563378564').should.equal('China UnionPay')
        }); 
    })(prefix)};      
  for (let prefix = 622126; prefix <= 622925; prefix++) {  
    (function(prefix) {    
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        detectNetwork(prefix+'2345678564345').should.equal('China UnionPay')
      }); 
    })(prefix)};   
  for (let prefix = 624; prefix <= 626; prefix++) {  
    (function(prefix) {    
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        detectNetwork(prefix+'1234567892345').should.equal('China UnionPay')
      }); 
    })(prefix)};    
  for (let prefix = 624; prefix <= 626; prefix++) {  
    (function(prefix) {    
      it('has a prefix of ' + prefix + ' and a length of 17', function(){
        detectNetwork(prefix+'12345678923454').should.equal('China UnionPay')
      }); 
    })(prefix)};   
  for (let prefix = 624; prefix <= 626; prefix++) {  
    (function(prefix) {    
      it('has a prefix of ' + prefix + ' and a length of 18', function(){
        detectNetwork(prefix+'123456789234555').should.equal('China UnionPay')
      }); 
    })(prefix)};   
  for (let prefix = 624; prefix <= 626; prefix++) {  
    (function(prefix) {    
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        detectNetwork(prefix+'1234567892345556').should.equal('China UnionPay')
      }); 
    })(prefix)};   
  for (let prefix = 6282; prefix <= 6288; prefix++) {  
    (function(prefix) {    
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        detectNetwork(prefix+'123456792345').should.equal('China UnionPay')
      }); 
    })(prefix)};   
  for (let prefix = 6282; prefix <= 6288; prefix++) {  
    (function(prefix) {    
      it('has a prefix of ' + prefix + ' and a length of 17', function(){
        detectNetwork(prefix+'1234567893454').should.equal('China UnionPay')
      }); 
    })(prefix)};   
  for (let prefix = 6282; prefix <= 6288; prefix++) {  
    (function(prefix) {    
      it('has a prefix of ' + prefix + ' and a length of 18', function(){
        detectNetwork(prefix+'12345678924555').should.equal('China UnionPay')
      }); 
    })(prefix)};   
  for (let prefix = 6282; prefix <= 6288; prefix++) {  
    (function(prefix) {    
      it('has a prefix of ' + prefix + ' and a length of 18', function(){
        detectNetwork(prefix+'123456789245555').should.equal('China UnionPay')
      }); 
    })(prefix)};   
  });



describe('Switch', function() {

  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  var should = chai.should();


  it('has a prefix of 4903 and a length of 16', function () {
    detectNetwork('4903112233445665').should.equal('Switch')
  });
    it('has a prefix of 4903 and a length of 18', function () {
    detectNetwork('490311223344566115').should.equal('Switch')
  });  
  it('has a prefix of 4903 and a length of 19', function () {
    detectNetwork('4903112233445661151').should.equal('Switch')
  });

    it('has a prefix of 4905 and a length of 16', function () {
    detectNetwork('4905112233445665').should.equal('Switch')
  });
    it('has a prefix of 4905 and a length of 18', function () {
    detectNetwork('490511223344566115').should.equal('Switch')
  });  
  it('has a prefix of 4905 and a length of 19', function () {
    detectNetwork('4905112233445661115').should.equal('Switch')
  });

    it('has a prefix of 4911 and a length of 16', function () {
    detectNetwork('4911112233445566').should.equal('Switch')
  });
    it('has a prefix of 4911 and a length of 18', function () {
    detectNetwork('491111223344565611').should.equal('Switch')
  });  
  it('has a prefix of 4911 and a length of 19', function () {
    detectNetwork('4911112233445661151').should.equal('Switch')
  });

    it('has a prefix of 4936 and a length of 16', function () {
    detectNetwork('4936112233445566').should.equal('Switch')
  });
    it('has a prefix of 4936 and a length of 18', function () {
    detectNetwork('493611225334455661').should.equal('Switch')
  });  
  it('has a prefix of 4936 and a length of 19', function () {
    detectNetwork('4936112233445661151').should.equal('Switch')
  });

    it('has a prefix of 564182 and a length of 16', function(){
    detectNetwork('5641821234567856').should.equal('Switch')
  });
    it('has a prefix of 564182 and a length of 18', function(){
    detectNetwork('564182123456776856').should.equal('Switch')
  });
    it('has a prefix of 564182 and a length of 19', function(){
    detectNetwork('5641821234568768856').should.equal('Switch')
  });

    it('has a prefix of 633110 and a length of 16', function(){
    detectNetwork('6331101234567856').should.equal('Switch')
  });
    it('has a prefix of 633110 and a length of 18', function(){
    detectNetwork('633110123456776856').should.equal('Switch')
  });
    it('has a prefix of 633110 and a length of 19', function(){
    detectNetwork('6331101234568768856').should.equal('Switch')
  });

    it('has a prefix of 6333 and a length of 16', function(){
    detectNetwork('6333441234567856').should.equal('Switch')
  });
    it('has a prefix of 6333 and a length of 18', function(){
    detectNetwork('633344123456776856').should.equal('Switch')
  });
    it('has a prefix of 6333 and a length of 19', function(){
    detectNetwork('6333441234568768856').should.equal('Switch')
  });

    it('has a prefix of 6759 and a length of 16', function(){
    detectNetwork('6759441234567856').should.equal('Switch')
  });
    it('has a prefix of 6759 and a length of 18', function(){
    detectNetwork('675933123456776856').should.equal('Switch')
  });
    it('has a prefix of 6759 and a length of 19', function(){
    detectNetwork('6759331234568768856').should.equal('Switch')
  });
});


