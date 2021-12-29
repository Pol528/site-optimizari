const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("" , (req, res) => {
    res.sendFile("c:/users/miron/desktop/website/index.html");
})

app.listen(PORT, () => {
    console.log(`${PORT}`)
})