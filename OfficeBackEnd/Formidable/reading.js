import {readFile} from "node:fs/promises";


async function readmyfile(){
console.log("1. Starting to read the file");
const result= await readFile("myJournal.txt","utf8");
console.log("2. after requestin file ");
console.log("3. File conent",result);
console.log("4. Finished")

}

readmyfile();



