import {readFile} from "node:fs/promises";
async function read() {
    try{
        const data=await readFile("./myJournal.txt","utf8");
      
        console.log(data);
      



    } catch(erro){
        console.log("file has not found bro check location or filenaem");
    }
    
}
read();