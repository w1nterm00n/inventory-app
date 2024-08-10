const express = require("express");
const path = require("path");
const app = express();
const router = require("./routes/router");
app.use(express.static(path.join(__dirname, "public")));

//задаю шаблонизатор ejs
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
//

//  обработка корневого маршрута (чтобы не было ошибки Cannot GET /)
app.use("/", router);
app.get("/", (req, res) => {
	res.render("homepage");
});
//

//настройка порта
const PORT = 3020;
const server = app.listen(PORT, () =>
	console.log(`Express app listening on port ${PORT}!`)
);
