
async function getData(){
    const response=await fetch('https://fakestoreapi.com/products');
    const resdata= await response.json();
    console.log(resdata)
    return resdata;
}
module.exports=getData;