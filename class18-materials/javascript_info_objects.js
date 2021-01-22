/* https://javascript.info/object#tasks
HELLO OBJECT
Write the code, one line for each action:
Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object. */

const user = {
  name: "John",
  surname: "Smith",
};

user.name = "Pete";

delete user.name;

/* CHECK FOR EMPTINESS
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise. */

const isEmpty = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

/* SUM OBJECT PROPERTIES
We have an object storing salaries of our team:
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
If salaries is empty, then the result must be 0.
 */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let prop in salaries) {
  sum += salaries[prop];
}

console.log(sum);

/* MULTIPLY NUMERIC PROPERTY VALUES BY 2
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2. */

const multiplyNumeric = (obj) => {
  for (let prop in obj) {
    //console.log(typeof obj[prop]);
    if (typeof obj[prop] == "number") {
      obj[prop] *= 2;
    }
  }
};

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);
//console.log(menu);
