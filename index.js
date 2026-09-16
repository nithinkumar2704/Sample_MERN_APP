let express=require('express');
let hrroutes=require('./routes/hr_routes');
let app=express();

app.use("/api/hr",hrroutes);  //calling 

//run the server in port 3000
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});


