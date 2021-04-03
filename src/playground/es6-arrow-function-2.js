// argument object - no longer bound with arrow function

const add = (a, b) => {
//    console.log(arguments);
    return a + b;
}
console.log(add(5454,454));



// this keyword - no longer bound

// for es5

// const user = {
//     name: 'bruno',
//     cities: ['lagos','imo','abuja','delta'],
//     printPlaceslived: function () {
//     const  that = this;

//     this.cities.forEach(function(city){
//        console.log(that.name + ' has lived in ' + city)
//     })
//  } 

// }
// user.printPlaceslived();

// for es6

// const user = {
//     name: 'bruno',
//     cities: ['lagos','imo','abuja','delta'],
//     printPlaceslived: function () {
    
//     this.cities.forEach((city) => {
//        console.log(this.name + ' has lived in ' + city)
//     })
//  } 

// }
// user.printPlaceslived();

// // this will give an error
// const user = {
//     name: 'bruno',
//     cities: ['lagos','imo','abuja','delta'],
//     printPlaceslived: () => {
    
//     this.cities.forEach((city) => {
//        console.log(this.name + ' has lived in ' + city)
//     })
//  } 

// }
// user.printPlaceslived();


// es6 method definition syntax

// const user = {
//     name: 'bruno',
//     cities: ['lagos','imo','abuja','delta'],
//     printPlaceslived() {
//      this.cities.forEach((city) => {
//        console.log(this.name + ' has lived in ' + city)
//     })
//  } 

// }
// user.printPlaceslived();

// the map method
// const user = {
//     name: 'bruno',
//     cities: ['lagos','imo','abuja','delta'],
//     printPlaceslived() {
//     return this.cities.map((city) => this.name + ' has lived in ' + city);
//  } 

// }
// console.log(user.printPlaceslived());


// challenge area

const multiplier = {
   numbers: [4,46,77,88],
   multiplyBy: 78,
   multiply() {
       return this.numbers.map((number) => number * this.multiplyBy);
   }
};

console.log(multiplier.multiply());