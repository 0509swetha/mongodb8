const{MongoClient}=require("mongodb");
const url="mongodb://127.0.0.1:27017";
const client=new MongoClient(url);
const database="school";
const dbconnect=async()=>{
    try{
        let connection=await client.connect();
        let dbconnection=await connection.db(database);
        let response=await dbconnection.collection("students").deleteMany({"schoolName":"valmeeki"});
        return response;
    }catch(error){
        console.log("db connect func error===",error);
    }
}
dbconnect().then((data)=>{
    console.log("data===",data);
}).catch((error)=>{
    console.log("error===",error);
})