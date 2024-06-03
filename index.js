const express=require('express');
const PORT=3001;
const app=express();
const prepareAndStartServer=()=>{
    app.listen(PORT,()=>{
        console.log(`server started at PORT:${PORT}`);
    });
}
prepareAndStartServer();