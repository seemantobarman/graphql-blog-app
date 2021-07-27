const express = require("express");
require("dotenv").config();

const app = express();

app.get("/rest", (req, res) => {
    res.json({
        data: "hit rest endpoint",
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server Started On Port ${process.env.PORT}`);
});
