const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send({ msg: "Working" });
});

const port = 8080;
app.listen(port, () => console.log(`Server is working on ${port} port`));
