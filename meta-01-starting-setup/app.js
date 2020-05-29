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
const company = {
  curEmployee: 0,
  employees: ["Max", "Manu", "Anna"],
  next() {
    if (this.curEmployee >= this.employees.length) {
      return { value: this.curEmployee, done: true };
    }
    const returnValue = {
      value: this.employees[this.curEmployee],
      done: false,
    };
    this.curEmployee++;
    return returnValue;
  },
};

let employee = company.next();

while (!employee.done) {
  console.log(employee);
  employee = company.next();
}
