const MongoClient=require('mongodb').MongoClient;

const url="mongodb+srv://utkarshrajsinha141:2zmykuUR9JLIi1PX@cluster0.5j8xug8.mongodb.net/?retryWrites=true&w=majority"

MongoClient.connect(url,function(err,db) {
   if(err){
        console.log("Unable to connect to database",err);
   }
    
   console.log("Connected to database");
   const dbo=db.db("myFirstDatabase");
//Create collection
//dbo.createCollection("todos",function(err,res){
//if (err){
 //   throw err;
//}
//console.log("Collection created")
//db.close()
//})


 


//Insert Document
//const myObj ={
//    title:"My first todo",
 //   completed:false
//}
//dbo.collection("todos").insertOne(myObj,function(err,res) {
   // if(err){
    //    throw err;
   // }
    //console.log("Document Inseted");
    //db.close()
   // })
//dbo.collection("todos").find({}).toArray(function(err,result){
  //  if(err){
  //      throw err;

   // }
   // console.log("result");
   // db.close();
  //  })


const critera={completed:false}
dbo.collection("todos").deleteOne(criteria,function(err,resp){
if(err){
    throw err;
}
console.log("Document deleted");
db.close();




})




})
