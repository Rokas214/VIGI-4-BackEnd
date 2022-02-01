const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send({ msg: "Working" });
});

app.post("/post", (req, res) => {
	res.send(req.body);
});

const port = 8080;
app.listen(port, () => console.log(`Server is working on ${port} port`));
