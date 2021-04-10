//Homework Part One

//Using what you did with Objects perdiod 2 from the slides, create a personal profile. Instead of Products you will need to create a personal profile. Initialize Constructors and More!
//Step 1
function Person(firstName,lastName, age, hobby, hometown) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.hobby = hobby;
    this.hometown = hometown
}

console.log(Person);


//Step 2
let person1 = new Person ('Maria', 'Garcia', 23, 'rock climbing');
console.log(person1);


//Step 3
let person2 = new Person ('Tim', 'Lee', 50, 'cooking');

let person3 = new Person ('Mary', 'Addison', 16, 'biking');

let person4 = new Person ('Alex', 'Jones', 32 ,'writing');


console.log(person2, person3, person4);


//Step 4
function Location(city, state) {
    this.city = city;
    this.state = state;
};

let hometown1 = new Location('Charlotte', 'NC');
let hometown2 = new Location('Austin', 'TX');
let hometown3 = new Location('Boston', 'MA');
let hometown4 = new Location('Portland', 'OR');

// console.log(location1, location2, location3, location4);


//Step 5
//added location as property for person in step 1
console.log(Person);

//Step 6
let profile1 = new Person('Maria', 'Garcia', 23, 'rock climbing', hometown1);

let profile2 = new Person ('Tim', 'Lee', 50, 'cooking', hometown2);

let profile3 = new Person('Mary', 'Addison', 16, 'biking', hometown3);

let profile4 = new Person('Alex', 'Jones', 32 ,'writing', hometown4);

console.log(profile1, profile2, profile3, profile4);


// Step 7
profile4.dislikes = "clowns";
console.log(profile4);

//.Create

//Step 1
let User = {
    type: 'Student',
    displayType: function() {
        console.log(this.type);
    }
};

User.displayType();

//Step 2
let user1 = Object.create(User);
user1.name = 'Agatha';
user1.hasHwDue = true;

user1.displayType();
console.log(user1);
//Step 3
let user2 = Object.create(User);
user2.type = 'Staff'

user2.displayType();


//Array vs Objects

//Objects: Create a hobby object with properties with name, descriptions and boolean of a property name of supplies needed.

let hobby = {
    name: 'basketball',
    description: 'sport',
    needsBall: true
};
//Use dot notation to return hobby description
console.log(hobby.description);

//Use bracket notation to return name
console.log(hobby['description']);


//Arrays: Create an array with 4 different hobbies

let hobbyList = [
    'sewing',
    'reading',
    'dancing',
    'soccer'
]
//access second item in the array
console.log(hobbyList[1]);

//Objects
//Change the value of the boolean of the object we created.
hobby.needsBall = false;
console.log(hobby);
//Add a new property to our person object such as supplies with multiple values in the property.
hobby.supplies = [
    'net',
    'sneakers',
    'jereseys'
]

//remove the hobby description property from the person object
delete hobby.description;
console.log(hobby);

//Arrays
//Use push to add another hobby to your array of hobbies
hobbyList.push('baking');
console.log(hobbyList);
//use pop to remove the last item from an hobby array
hobbyList.pop();
console.log(hobbyList);

//use unshift to add more values to the beginning of the hobby array.
hobbyList.unshift('yoga', 'running', 'singing');
console.log(hobbyList);

// us shift to remove the first item from the hobby of the array
hobbyList.shift();
console.log(hobbyList);

//Object
//Write a for in loop for the person object you created
for (let key in hobby) {
    console.log(key);
    console.log(hobby[key]);
}

//Write a for each loop for your person Object
Object.keys(hobby).forEach(function(key) {
    console.log(key);
    console.log(hobby[key]);
});

//Arrays
//Write a for loop for your hobby array
for (let i = 0; i < hobbyList.length; i++) {
    console.log(hobbyList[i]);
};

//Write a for of loop for your hobby array

for (let item of hobbyList) {
    console.log(item);
};


//write a for each loop for your hobby array

hobbyList.forEach(item => {
    console.log(item);
})



