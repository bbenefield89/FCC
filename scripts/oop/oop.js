// Understand own property
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety"); // Creates new instance object by calling constructor
let ownProps = [];
for (var x in canary) {
    ownProps.push(x); // Push the property names, not values, into ownProps
}

console.log(ownProps); // Returns ['name', 'numLegs']