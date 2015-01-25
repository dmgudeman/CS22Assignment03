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

