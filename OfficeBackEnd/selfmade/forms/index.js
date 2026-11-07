import { createServer } from "node:http";
import addressesData from "./data.js";
import { getList } from "./list.js";
import { deleteAddress } from "./delete.js";
import { getForm } from "./form.js";

let addresses = addressesData;

const server = createServer(function(request, response) {

  const parts = request.url.split("/");
 
console.log("hello i am at this part",parts);

  if (parts.includes("delete")) {

    addresses = deleteAddress(addresses, parts[2]);
    // redirect(response, "/");
    send(response, getList(addresses));

  } else if (parts.includes("new")) {

    send(response, getForm());

  } else if (parts.includes("edit")) {

    send(response, getForm(addresses, parts[2]));

  } else {

    send(response, getList(addresses));

  }

});

server.listen(8080, function() {
  console.log("Address book reachable at http://localhost:8080");
});

function send(response, responseBody) {

  response.writeHead(200, {
    "content-type": "text/html"
  });

  response.end(responseBody);

}

function redirect(response, root) {

  response.writeHead(302, {
    location: root,
    "content-type": "text/plain"
  });

  response.end("302 Redirecting");

}
console.log("this is update");