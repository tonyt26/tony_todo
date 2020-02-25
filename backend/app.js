const express = require("express");
require("./config/db");

const app = express();
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});