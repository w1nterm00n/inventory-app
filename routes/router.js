const { Router } = require("express");
const controller = require("../controllers/controller");
const router = Router();

router.get("/", controller.homepageGet);

router.get("/allAlbums", controller.allAlbumsGet);
router.get("/allGenres", controller.allGenresGet);

router.get("/addAlbum", (req, res) => {
	controller.addAlbumGet(req, res);
});

router.post("/addAlbum", (req, res) => {
	controller.addAlbumPost(req, res);
	res.redirect("/");
});

router.get("/addGenre", controller.addGenreGet);

router.post("/addGenre", (req, res) => {
	controller.addGenrePost(req, res);
	res.redirect("/");
});

router.get("/genre/:id", (req, res) => {
	const id = parseInt(req.params.id, 10);
	controller.findGenreById(id, res);
});

router.get("/album/:id", (req, res) => {
	const id = parseInt(req.params.id, 10);
	controller.findAlbumById(id, res);
});

router.delete("/album/:id", (req, res) => {
	const id = parseInt(req.params.id, 10);
	controller.deleteAlbumById(id, res);
	res.redirect("/");
});

router.delete("/genre/:id", (req, res) => {
	const id = parseInt(req.params.id, 10);
	controller.deleteGenreById(id, res);
	res.redirect("/");
});

//отображение формы для апдейта жанра
router.get("/genre/update/:id", (req, res) => {
	const id = parseInt(req.params.id, 10);
	controller.updateGenreGetForm(id, res);
});

//отображение формы для апдейта альбома
router.get("/album/update/:id", (req, res) => {
	const id = parseInt(req.params.id, 10);
	controller.updateAlbumGetForm(id, res);
});

module.exports = router;
