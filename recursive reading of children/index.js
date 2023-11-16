class Employee {
  constructor(name, gender) {
    this.name = name;

    this.children = [];
    this.gender = 0; // 0 male, 1 female
    this.parent = null;
  }
}

const grandFather = new Employee("Petya", 0);
const grandMother = new Employee("Nadia", 1);
const projectManager = new Employee("Project Manager", 1);
const teamLeader = new Employee("Team", 0);
const programmer1 = new Employee("Vasya", 0);
const programmer2 = new Employee("Anna", 1);
const trainee1 = new Employee("Bot1", 0);
const trainee2 = new Employee("Bot2", 1);

programmer1.children.push(trainee1);
programmer2.children.push(trainee2);
teamLeader.children.push(programmer1, programmer2);
grandFather.children.push(grandMother, projectManager, teamLeader);

const countEmployees = (sourceChildren) => {
  // 1. Count all children of the User
  let count = sourceChildren.length;
  // 2. Create array of grandChildren
  console.log(sourceChildren);
  const grandChildren = sourceChildren.filter((child) => child.children.length);
  console.log(grandChildren);
  // 3. Check if child has children
  if (grandChildren.length === 0) return count;
  // 4. Add children of the grandChildren to the count
  const grantChildrenCount = grandChildren.reduce(
    (previousValue, currentValue) =>
      // 5. Repeat
      previousValue + countEmployees(currentValue.children),
    0
  );
  return count + grantChildrenCount;
};

const res = countEmployees(grandFather.children);
console.log({ res });
