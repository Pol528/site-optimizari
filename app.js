let express = require("express");
let app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname))
app.get("" , (req, res) => {
    res.sendFile("index.html");
    res.sendFile("./.well-known/pki-validation/CC8ECBF936742C60B0E2F4AC686AE6CE.txt")
})

app.listen(PORT, () => {
    console.log(`${PORT}`)
})