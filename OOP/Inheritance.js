var Person = function (name, id) {
    this.name = name;
    this.id = id;
};

var Student = function (dept, age) {
    this.dept = dept;
    this.age = age;
};

var Employee = function (name, id, sal, dept) {
    // Call the Person constructor to initialize name and id
    Person.call(this, name, id);
    this.sal = sal;
    this.dept = dept;
};

// Set up the prototype chain
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.vactionDays = 21;

var emp1 = new Employee("Mohamed", "2355", "125000", "Software Engineer");
console.log(emp1);
console.log(emp1.vactionDays);
console.log(Employee.vactionDays);


