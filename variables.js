// Diiference between var, let and const...
// 1. var is globally scoped while let and const are block scoped.
// 2. var can be updated & redeclared within its scope.
// 3. let can be updated and not redeclared.
// 4. const can neither be updated nor redeclared.
// 5. var can be delared without initialization but let and const can't be declared without initialization.

var a = 23;
var b = "Prashant";
let c = "this";
var d = undefined;
{
  var b = "This is first chapter";
  console.log(b);
  let c = 45;
  console.log(c);
}
console.log(b); // Block value is assigned globally oustide the block in case of var
console.log(c); // Global value is assigned ouside the block in case of let