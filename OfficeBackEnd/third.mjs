import {checking} from "./debug1.mjs"
console.log(checking);
function student() {
    global.name1 = "Peter";

    console.log(name1);
}

student();

console.log("i am ",global.name1);