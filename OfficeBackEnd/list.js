export function getList(address){
return `<!DOCTYPE html>
    <html>
      <head>
        <title>Address book </title>
      </head>
      <body>
        <h1>Address book </h1>
        <table>  
        <thead>  
        <tr> 
        <th> id </th>
        <th> First Name </th>
        <th> LastName </th>

        </tr>
        
        
        </thead>
        <tbody>
      ${address.map(function(item){
        return `
  <tr>
        <td>${item.id}</td>
        <td>${item.firtsname}</td>
        <td>${item.lastname}</td>
        <td> <a href="/delete/${item.id}" > Delete   </td>
    </tr>
  `
      }).join("")}

        </tbody>
        
        </table>



      </body>
    </html>`


}

