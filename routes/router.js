const { Router } = require("express");
const controller = require("../controllers/controller");
const router = Router();

router.get("/", controller.homepageGet);

router.get("/allAlbums", controller.allAlbumsGet);
router.get("/allGenres", controller.allGenresGet);

//router.get("/addAlbum", controller.addAlbumGet);

router.get("/addAlbum", (req, res) => {
	controller.addAlbumGet(req, res);
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

module.exports = router;
