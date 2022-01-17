const app = require("./index");

const dbConnect = require("./configs/db");

const PORT = process.env.PORT || 2000;

app.listen(PORT, async()=>{
    await dbConnect();
    console.log("Server is running");
})