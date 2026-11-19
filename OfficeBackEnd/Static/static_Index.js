import {createServer} from "http";
import {readFile} from "fs";

let address=[{
id:1,
firstname:"ram",
lastname:"kshetriya",
city:"Ayodhya",
},
{
id: 2,
 firstname: 'Hari',
lastname: 'Thapa', 
city: 'Pokhara'

},
{
 id: 3,
firstname: 'Sita',
lastname: 'Rai',
city: 'Butwal'   
}];


function getList(address){

    return `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Address Book</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <h1>My Address Book</h1>

        <table>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>City</th>
                </tr>
           
                ${address.map(function(data){
                    return `
                    <tr> 
                    <td> ${data.id} </td>
                    <td> ${data.firstname} </td>
                    <td> ${data.lastname} </td>
                    <td> ${data.city} </td>
                    </tr> 
                    `}).join("")}
                      </table>
                    </body>
    </html>`
}

createServer(function(req,res){
    console.log("requeset url is ",req.url);
    if(req.url=="/style.css"){
        readFile("./style.css","utf8",function(err,data){
                if(err){
                     console.log("File reading error:", err);
                    res.statusCode=404;
                   
                    res.end("css file is not found");

                } else{
                    res.setHeader("Content-type","text/css");
                    res.end(data);
                }

        });


    } else {
        res.setHeader("Content-type","text/html");
        res.end(getList(address));
    }



}).listen(8080,function(){
    console.log("Address book has started server at http://localhost:8080");
});
