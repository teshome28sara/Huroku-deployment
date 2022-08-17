const express = require("express")

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/" , (req, res) =>{
    res.sendFile("./views/index.html")
} )  


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
  
