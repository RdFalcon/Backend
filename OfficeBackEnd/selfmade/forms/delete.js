export function deleteAddress(addresses, id) {

  const filteredAddresses = addresses.filter(function(address) {
    return address.id !== parseInt(id, 10);
  });

  return filteredAddresses;
}