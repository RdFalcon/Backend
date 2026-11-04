export function deleteAddress(address,id){


const parseId=parseInt(id,10);
return address.filter(function(address){
    return address.id !==parseId;
})

};