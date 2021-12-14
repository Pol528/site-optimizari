const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("" , (req, res) => {
    res.send("SAUT, PE MINE MA CHIAMA YOAN");
})

app.listen(PORT, () => {
    console.log(`${PORT}`)
})