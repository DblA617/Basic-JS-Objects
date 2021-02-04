let dog = {
    name: "Bosco",
    numLegs: 4
    };

let dog = {
    name: "Bosco",
    numLegs: 4
      };
      // Only change code below this line
      console.log(dog.name, dog.numLegs);

let dog = {
        name: "Spot",
        numLegs: 4,
        sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
      
      };
      
      dog.sayLegs();

    //   Object Oriented Programming: Define a Constructor Function

    function Dog() {
        this.name = "Albert";
        this.color = "blue";
        this.numLegs = 4;
      }

    //   Object Oriented Programming: Use a Constructor to Create Objects

    function Dog() {
        this.name = "Albert";
        this.color = "brown";
        this.numLegs = 4;
      }
      
      let hound = new Dog()


    //   Object Oriented Programming: Extend Constructors to Receive Arguments

    function Dog(name, color) {
        this.name = name;
        this.color = color;
        this.numLegs = 4;
        }
        let terrier = new Dog("Tommy", "white");

        // terrier.name => Tommy
        // terrier.color => White
        // terrier.numLegs => 4

// Object Oriented Programming: Verify an Object's Constructor with instanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  let myHouse = new House(5);
  
  myHouse instanceof House;



//   Object Oriented Programming: Understand Own Properties

  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  
  for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
  
  console.log(ownProps)





//   Object Oriented Programming: Use Prototype Properties to Reduce Duplicate Code

function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 4
  
  let beagle = new Dog("Snoopy");


  
