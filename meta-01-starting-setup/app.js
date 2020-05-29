// Library Land
const uid = Symbol("uid");
console.log(uid);

const user = {
  id: "p1",
  name: "Max",
  age: 30,
};

//App land
user.id = "p2";

// Iterators
// Any object with the next method is a iterator
/*const company = {
  curEmployee: 0,
  employees: ["Max", "Manu", "Anna"],
  getEmployee: function* employeeGenerator() {
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  },
};*/

const company2 = {
  curEmployee: 0,
  employees: ["Max", "Manu", "Anna"],
  [Symbol.iterator]: function* employeeGenerator() {
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  },
};

// Loop in iterator v1
for (const employee of company2) {
  console.log(employee);
}

// Loop in iterator v2
console.log([...company2]);

/*let it = company.getEmployee();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());*/
/*
 * With Symbol we can execute that generator function because "[Symbol.iterator]" return an iterable object
 * The generator has is own next() function
 * Use the keyword "yield" only for generators in javascript
 * The generator is set by a function with symbol '*' in front of it
 *
 * */
