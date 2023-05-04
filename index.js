const express = require('express');
const cors = require("cors");

const app = express();
app.use(cors());

const allInfo = require("./data.json");
app.get('/', (req, res) => {
    res.send("server is running");
});

app.get("/allData",(req,res)=>{
    res.send(allInfo);
})
app.get("/allData/:id",(req,res)=>{
    const id= req.params.id;
    const item = allInfo[0]?.services?.find((pd)=>pd.id == id);
    res.send({item})

})

app.listen(5000, () => {
    console.log("server running on port 5000");
});