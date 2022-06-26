// for...in

let person = {
  name: "Kennedy",
  age: 21,
  hobby: "programming",
};

for (let property in person) {
  console.log(property);
  //   console.log(person.name);
  //   console.log(person["age"]);
  console.log(person[property]);
}
