import {createServer} from "http";
import  table  from "./table.js";
import { htmlpage } from "./htmlpage.js";
import { erase } from "./erase.js";
const server=createServer(function(req,res){
res.writeHead(200,{"content-Type":"text/html"});



if(req.url=="/"){
const details=table.details; // it containts the detail of tab
const body=htmlpage(details);
console.log("i am from details ",details);

res.end(body);

}
else if(req.url.startsWith("/delete/")){
    const details=table.details; // it containts the detail of tab

let id=req.url.split("/")[2];
let address1=erase(details,id)
let body=htmlpage(address1);
res.end(body);


}


});

server.listen(9000,"0.0.0.0",function(){
    console.log("server has started in port 9000");
})