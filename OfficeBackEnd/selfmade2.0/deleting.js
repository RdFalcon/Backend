export function delet(address,id){

    const filt=address.filter(function(data){
        return data.id==parseInt(id,10);

    });
    return filt;

}