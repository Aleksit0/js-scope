// MAIN (FIRST) EXAMPLE
// In Javascript there are 2 types of scopes:
// GLOBAL and LOCAL scope

// GLOABL SCOPE
let name = "global Octocat"
console.log(name);

// LOCAL SCOPE - example no.1
function getName() {
  let name = 'local Octocat';
    /* If there is no name variable in this function,
      the program will search for that same variable
      but outside this function.  */ 
  console.log(name);
}

getName();