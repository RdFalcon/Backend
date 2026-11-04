import {createServer} from "http";
import data from "./data.js";
import { getList } from "./list.js";
import { deleteAddress } from "./delete.js";

 const server= createServer(function(req,res){
   res.writeHead(200,{
        "content-type":"text/html"
    });
  let address=data.address;

if(req.url==="/"){
 const resBody=getList(address);
    res.end(resBody);

}
else if (req.url.startsWith("/delete/")){
  const id=req.url.split("/")[2];
  address=deleteAddress(address,id);
const resBody=getList(address);
res.end(resBody);

}

   
})
server.on("connection",function(socket){
  console.log("A client is connected")
})
server.on("connection",function(socket){
  console.log("The ip address is ",socket.remoteAddress);
})


server.on("close",function(){
  console.log("server has been closed")
})



server.listen(9000,"0.0.0.0",function(){
    console.log("server has been started at 9000");
})


