const express = require("express")

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/" , (req, res) =>{
    res.send("Hello there  world")
} )  


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
  
