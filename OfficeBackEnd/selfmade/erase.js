export function erase(details,id){
const parseId=parseInt(id,10);
return details.filter(function(details){
   return details.id!==parseId
})

};