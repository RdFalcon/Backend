import {createServer} from "http";
import {selfmadeaddressBook} from "./selfmadeaddressBook.js";
import ids from "./content_data.js"

const server=createServer(function(req,res){

    res.writeHead(200,{"content-type":"text/html"});


        const body=selfmadeaddressBook(ids);
    res.end(body);


});

server.listen(9000,function(){
    console.log("server is started")
});