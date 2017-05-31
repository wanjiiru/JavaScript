 'use strict'
function Person(first, last, age, email, gender){
	this.firstName=first;
	this.lastName=last;
	this.age=age;
	this.email=email;
	this.gender=gender;

}
Person.prototype.name=function (){
	return this.firstName + " "+this.lastName
};
var myCousin = new Person("liz","wanjiiru","23","liz240@live","female");

document.getElementById("sample").innerHTML= "My cousin "+ myCousin.firstName +"is" +myCousin.age +"years";

