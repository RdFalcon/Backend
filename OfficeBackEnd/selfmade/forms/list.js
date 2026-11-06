export function getList(addresses) {

  const rows = addresses.map(function(address) {
    return `
      <tr>
        <td>${address.id}</td>
        <td>${address.firstname}</td>
        <td>${address.lastname}</td>
        <td>${address.city}</td>
        <td>
          <a href="/edit/${address.id}">Edit</a>
          <a href="/delete/${address.id}">Delete</a>
        </td>
      </tr>
    `;
  }).join("");

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Address Book</title>
    </head>
    <body>
      <h1>Address Book</h1>
      <a href="/new">Add New Address</a>
      <table border="1">
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
        ${rows}
      </table>
    </body>
    </html>
  `;
}