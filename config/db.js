
const {createPool} = require("mysql")
const pool =createPool({
    host:"localhost",
    user:"root",
    password:"password",
    port:3306,
    database:"data"

});
pool.getConnection((err)=>{
    if(err){
        console.log("Error connection to database")
    }
    console.log("db connected")
})

module.exports=pool

const executeQuery=(query,arraParams)=>{
    return new Promise((resolve,reject)=>{
        try{
           pool.query(query,arraParams,(err,data)=>{
            if(err){
                console.log("error is executing the query")
                reject(err)
            }
            resolve(data)
           })
        }catch(err){
            reject(err)
        }
    })
}

module.exports={executeQuery}