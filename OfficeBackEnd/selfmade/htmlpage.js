export function htmlpage(details){
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Phone book with capacity to Delete</h1>
   <table>
        <thead>
            <th>id </th>
            <th> firstName</th>
            <th>LastName</th>
            <th> city</th>
        </thead>

        <tbody>
           ${details.map(function(data){
            return `
            <tr>
            <td> ${data.id} </td>
            <td> ${data.firstName}</td>
            <td> ${data.lastname}</td>
            <td> ${data.city}</td>
            <td > <a href="/delete/${data.id}">delete</a>    </td>

           
            
            </tr>
            

            `

           }).join("")
        }



        </tbody>


    </table>



</body>
</html>`



}