import {createServer} from "http";
import {selfmadeaddressBook} from "./selfmadeaddressBook.js";
import ids from "./content_data.js"
 import {delet} from "./deleting.js";

 let ides=ids;
const server=createServer(function(req,res){

    let parts=req.url.split("/");
    console.log(parts);
    if(parts.includes("delete")){
        
            ides=delet(ides,parts[2]);
           
           return send(res,selfmadeaddressBook(ides))
    }



    res.writeHead(200,{"content-type":"text/html"});


        const body=selfmadeaddressBook(ides);
    res.end(body);


});

server.listen(9000,function(){
    console.log("server is started")
});

function send(response,responseBody){

    response.writeHead(200,{
        "content-type":"text/html"
    });
    response.end(responseBody);
}