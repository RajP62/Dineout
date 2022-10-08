const app = require("./index");
const PORT = process.env.PORT || 4000;
const connection = require("../src/configs/db");

app.listen(PORT, async()=>{
    await connection();
    console.log('Server is running on PORT 4000');
});