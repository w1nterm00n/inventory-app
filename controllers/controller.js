const {
	getAllAlbums,
	getAllGenres,
	getAlbumById,
	getGenreById,
	addGenre,
	getGenresList,
	addAlbum,
	deleteAlbum,
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

exports.addAlbumGet = async (req, res) => {
	//чтобы отобразить форму, надо добавить туда список с жанрами
	const genres = await getGenresList();
	res.render("addAlbum", { genres: genres });
};

exports.deleteAlbumById = async (id, res) => {
	//запустить запрос который удалит, ниче рендерить не надо
	await deleteAlbum(id);
};

exports.addAlbumPost = async (req, res) => {
	//albumName, artistName, albumGenre (могуть быть беды), albumYear, albumPrice, albumImgUrl, albumDesc
	const albumName = req.body.albumName;
	const artistName = req.body.artistName;
	const albumGenre = req.body.albumGenre;
	const albumYear = req.body.albumYear;
	const albumPrice = req.body.albumPrice;
	const albumImgUrl = req.body.albumImgUrl;
	const albumDesc = req.body.albumDesc;
	await addAlbum(
		albumName,
		artistName,
		albumGenre,
		albumYear,
		albumPrice,
		albumImgUrl,
		albumDesc
	);
};

exports.addGenreGet = (req, res) => {
	res.render("addGenre");
};

exports.addGenrePost = async (req, res) => {
	const name = req.body.genreName;
	await addGenre(name);
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
