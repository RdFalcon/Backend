import {readFile} from "node:fs/promises";
// console.log(

//     "1. i am one"
// )

// async function read(){
//        console.log("2.I am two")
//    const rote=  await readFile("./myJournal.txt","utf8");
//     console.log("3.I am three",rote);
// }


// read();
// console.log("4. I am four");


async function first() {
    const data=await readFile("./myJournal.txt","utf8");
    console.log(data);
};

async function second() {
    console.log("hello g");
};

first();
second();