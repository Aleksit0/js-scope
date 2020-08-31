// THIRD EXAMPLE
let car = 'Ferrari'; // If this variable would not exist
                    // it will bring an error.

function getCar() {

  function other() {
    let car = 'Ford';
    console.log(car);
  }

  console.log(car); // This will be printed out first
                    // because it will look up in global scope.
  other();
}

getCar();