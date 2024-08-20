import util from "util";

const name = "Kevin";
const lastname = "Nugraha";
console.info(`Hello ${name}`);
console.info(util.format("Hello %s %s", name, lastname));

const person = {
    firsname: "Kevin",
    lastname: "Nugraha"
}

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));
