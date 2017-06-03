'use strict'
function Person(first, last, age, email, gender){
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.email = email;
	this.gender = gender;

}

Person.prototype.name = function(){
	return this.firstName + " "+this.lastName 
};

var myCousin = new Person("liz","wanjiiru","23","liz240@live","female");

document.getElementById("sample").innerHTML = "My cousin " + " " + myCousin.firstName + " " + "is" + " " + myCousin.age + " " + "years";


//closures
var secretPassword = (function(guess) {
  var password = 'lizzie';

  return function(guess) {
    return guess === password;
  }
})();

var guessPassword = function (value,event) {

  if(event.keyCode==13) {
    
    var guessed;

    var status = secretPassword(value);
    
    if(status) 
    {
      guessed = 'Yah!, you guessed right'
    }
    else 
    {
       guessed = 'Whoops, poor guess';
    }

    document.getElementById("guess").innerHTML = guessed;
  }
  
}

var passwordGame = secretPassword('lizzie');


