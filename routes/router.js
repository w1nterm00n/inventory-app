const { Router } = require("express");
const controller = require("../controllers/controller");
const router = Router();

router.get("/", controller.homepageGet);

router.get("/allAlbums", controller.allAlbumsGet);
router.get("/allGenres", controller.allGenresGet);

router.get("/addAlbum", controller.addAlbumGet);
router.get("/addGenre", controller.addGenreGet);

router.get("/genre", controller.genreGet);

router.get("/album", controller.albumGet);

module.exports = router;
