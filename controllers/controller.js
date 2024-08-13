const {
	getAllAlbums,
	getAllGenres,
	getAlbumById,
	getGenreById,
} = require("../db/queries.js");

exports.homepageGet = (req, res) => {
	res.render("homepage");
};

exports.allAlbumsGet = async (req, res) => {
	const albums = await getAllAlbums();
	res.render("allAlbums", { albums });
};

exports.allGenresGet = async (req, res) => {
	const genres = await getAllGenres();
	res.render("allGenres", { genres });
};
exports.genreGet = (req, res) => {
	res.render("genre");
};

exports.addGenreGet = (req, res) => {
	res.render("addGenre");
};
exports.addAlbumGet = (req, res) => {
	res.render("addAlbum");
};

exports.findAlbumById = async (id, res) => {
	const album = await getAlbumById(id);
	if (!album) {
		return res.status(404).send("Album not found");
	}
	res.render("album", { album: album });
};

exports.findGenreById = async (id, res) => {
	const albums = await getGenreById(id);
	console.log(albums);
	if (!albums) {
		return res.status(404).send("Albums not found");
	}
	res.render("genre", { albums: albums });
};
