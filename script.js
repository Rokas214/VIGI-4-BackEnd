const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();
app.use(cors());
app.use(express.json());

const items = [
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png",
	},
];

app.get("/", (req, res) => {
	res.send(items);
});

app.post("/post", (req, res) => {
	if (!req.body.image) {
		return res.status(400).send({ err: "Incorrect data passed" });
	}
	items.push({
		image: req.body.image,
	});

	res.send({ msg: "Image Successfuly added" });
});

const port = 8080;
app.listen(port, () => console.log(`Server is working on ${port} port`));
