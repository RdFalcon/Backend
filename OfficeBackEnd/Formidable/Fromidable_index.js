import {createServer} from "node:http";
import formidable from "formidable";
import {mkdir,rename} from "node:fs/promises";
import path from "node:path";

const uploadDir=path.join(process.cwd(),"uploads");
const server=createServer(async function(req,res){
    if(req.url=="/" && req.method=="GET"){
        res.writeHead(200,{"Content-Type":"text/html"});
        
        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
            <title> File Upload </title>
            </head>
            <body>
            <h1> Upload Your files </h1>
            <form action="/upload" method="POST" enctype="multipart/form-data">
            <input type="file" name="myfile" required>
            <button type="submit"> Upload </button>
            </form>
            </body>
            </html>
            `);
    }
        else if(req.url=="/upload" && req.method=="POST" ){

            const form=formidable({
                uploadDir:uploadDir,
                keepExtensions:true,
                maxFieldsSize:10*1024*1024
            });
           
            try{

                await mkdir (uploadDir,{recursive:true});
                const [field,files]=await form.parse(req);
                const uploadedFile=files.myfile?.[0];

                if(!uploadedFile){
                    res.writeHead(400);
                    res.end("No file uploaded");
                    return;
                }

                const newFileName=`${Date.now()}-${path.basename(uploadedFile.originalFilename)}`;
                const destination=path.join(uploadDir,newFileName);

                await rename(uploadedFile.filepath,destination);
                res.writeHead(200,{
                    "Content-Type":"text/html"
                });
                res.end(`
                    <h1> File uploaded successfully!</h1>
                    <p> File name : ${newFileName} </p>
                    <a href="/"> Upload another file </a>
                    `);
                    console.log("uploaded file:",uploadedFile);



            }    catch(error){
                console.log(error);
                if(!res.headersSent){
                    res.writeHead(500,{
                        "Content-Type":"text/plain"
                    });
                    res.end("file upload failed")
                }

            }



        } 
        else {
            res.writeHead(404);
            res.end("Page not found");

        }






});

server.listen(9000,function(){
    console.log("server is running at http://localhost:9000")
});