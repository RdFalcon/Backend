export function getForm(addresses = [], id) {

  let address = {
    id: 'please write id',
    firstname: 'please write first name',
    lastname: '',
    street: '',
    city: '',
    country: ''
  };

  if (id) {
    address = addresses.find(function(adr) {
      return adr.id === parseInt(id, 10);
    });
  }

  const form = `<!DOCTYPE html>
<html>
<head>
  <title>Address Book</title>
  <meta charset="utf-8">
</head>
<body>

  <h1>Address Form</h1>

  <form action="/save" method="POST">

    <input type="hidden" name="id" value="${address.id}">

    <div>
      <label for="firstname">First Name</label>
      <input type="text" id="firstname" name="firstname" value="${address.firstname}">
    </div>

    <div>
      <label for="lastname">Last Name</label>
      <input type="text" id="lastname" name="lastname" value="${address.lastname}">
    </div>

    <div>
      <label for="street">Street</label>
      <input type="text" id="street" name="street" value="${address.street}">
    </div>

    <div>
      <label for="city">City</label>
      <input type="text" id="city" name="city" value="${address.city}">
    </div>

    <div>
      <label for="country">Country</label>
      <input type="text" id="country" name="country" value="${address.country}">
    </div>

    <button type="submit">Save</button>

  </form>

</body>
</html>`;

  return form;
}