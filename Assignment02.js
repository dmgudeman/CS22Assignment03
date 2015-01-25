/*
 * Assignment 2
 * David Gudeman
 *
 */
'use strict';

// Create the pet protoptype 
var pet = {hungry: true, ill: false, name: 'Your Pet'};
    // Fill in the properties.  

pet.feed = function () {
    this.hungry = false;
    return this.name + " is full.";
};

pet.newDay = function () {
    for (var prop in this){
      if (typeof this[prop] === "boolean"){
        this[prop] = true; 
      }
    }  return 'Good morning!';   
};

pet.check = function () {
    var description = ""
    for (var prop in this){
        if (typeof this[prop] === "boolean"){
            if (this[prop]){
              description += this.name + " is "+ prop + ". ";  }   
        }                  
    }   
    description = description || this.name + " is fine.";
    return description;     
};

// Create the fish prototype.  fish inherits from pet. 
var fish = Object.create(pet);
fish.clean = function () {
    this.ill = false;
    return this.name + " likes the clean tank.";
};

// Create the dog prototype. dog inherits from pet.
var dog = Object.create(pet);

// Initialize the lonely property
dog.lonely = false;
dog.walk = function () {
    this.ill = false;
    return this.name + " enjoyed the walk!";
};

dog.play = function () {
    this.lonely = false;
    return this.name + " loves you." 
};

/*
 * Virtual Pet App - Tests
   
   The expected console output for this test is:
    Fido is hungry.
    Fido is full.
    Fido is fine.
    Wanda is hungry.
    Wanda is full.
    Wanda is fine.
    Good morning!
    Good morning!
    Fido is hungry. Fido is lonely. Fido is ill.
    Fido is full.
    Fido is lonely. Fido is ill.
    Fido loves you.
    Fido is ill.
    Fido enjoyed the walk!
    Fido is fine.
    Wanda is hungry. Wanda is ill.
    Wanda is full.
    Wanda is ill.
    Wanda likes the clean tank.
    Wanda is fine.
    Fido is fine.
    Fido enjoyed the walk!
    Your Pet is hungry.
    Good morning!
    Your Pet is bored. Your Pet is hungry. Your Pet is ill. 
 *
 */

// Create a dog and a fish pet objects.
var myDog = Object.create(dog);
myDog.name = 'Fido';
myDog.age = 1;
var myFish = Object.create(fish);
myFish.name = 'Wanda';
console.log(myDog.check());      // Fido is hungry.
console.log(myDog.feed());       // Fido is full.
console.log(myDog.check());      // Fido is fine.
console.log(myFish.check());     // Wanda is hungry.
console.log(myFish.feed());      // Wanda is full.
console.log(myFish.check());     // Wanda is fine.
console.log(myDog.newDay());     // Good morning!
console.log(myFish.newDay());    // Good morning!
console.log(myDog.check());      // Fido is hungry. Fido is lonely. Fido is ill.
console.log(myDog.feed());       // Fido is full.
console.log(myDog.check());      // Fido is lonely. Fido is ill.
console.log(myDog.play());       // Fido loves you.
console.log(myDog.check());      // Fido is ill.
console.log(myDog.walk());       // Fido enjoyed the walk!
console.log(myDog.check());      // Fido is fine.
console.log(myFish.check());     // Wanda is hungry. Wanda is ill.
console.log(myFish.feed());      // Wanda is full.
console.log(myFish.check());     // Wanda is ill.
console.log(myFish.clean());     // Wanda likes the clean tank.
console.log(myFish.check());     // Wanda is fine.
console.log(myDog.check());      // Fido is fine.
console.log(myDog.walk());       // Fido enjoyed the walk!
// Create a fish with no name
var myNewFish = Object.create(fish); 
console.log(myNewFish.check());  // Your Pet is hungry.
// Create a new boolean property for myNewFish
myNewFish.bored = false; 
console.log(myNewFish.newDay()); // Good morning!
console.log(myNewFish.check());  // Your Pet is bored. Your Pet is hungry. Your Pet is ill.

