class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age
  }
  getGreeting() {
    return `hi, i am ${this.name}! `;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person{
  constructor(name,age,major) {
    super(name,age);
    this.major = major;
  }
  hasMajor() {
  return !!this.major
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
       description += `their major is ${this.major}`;

    }
    return description;
  }
  
}


class Traveler extends Person{
  constructor(name,age,major,homeLocation) {
    super(name,age);
    this.homeLocation = homeLocation
  }
  hasLocation() {
    return !!this.homeLocation
  }
  getGreeting() {
    let greetings = super.getGreeting();

    if(this.homeLocation) {
      greetings +=  ` ${this.name}. I'm visiting from ${this.homeLocation}.`;
    }
    return greetings;
  }
  
}

const me = new Traveler('Bruno Ugwu' , 56 ,'Mathematics','ikeduru' );
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting()); 