const fs= require('fs')
const fsi= require('fs').promises

function writeData(){
    let statusamsg =""; 
    try{
        fs.writeFileSync("studentdata.txt","welcomwe to node module fs")
        // console.log("data is written sucessfully")
        statusamsg="Data is writteen sucessfully";
    }catch(e){
        // console.log("Error is:"+e)
        statusamsg="Error is:" +e;
    }

    return statusamsg;
}

function readData(){
    let statusamsg =""
    try{
        const fdata = fs.readFileSync('student.txt',{endcoding:'utf-8'})
        statusamsg=fdata
    }catch(e){
        statusamsg=e;
    }
    return statusamsg
}

function deleteData(){
    try{
        fs.unlinkSync('studentdata.txt')

    }catch(e){

    }
}

const obj = {readData , writeData,deleteData}
// module.exports=writeData;
module.exports=obj;