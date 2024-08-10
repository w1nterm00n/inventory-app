exports.homepageGet = (req, res) => {
	res.render("homepage");
};

exports.allAlbumsGet = (req, res) => {
	res.render("allAlbums");
};
exports.allGenresGet = (req, res) => {
	res.render("allGenres");
};

exports.genreGet = (req, res) => {
	res.render("genre");
};
exports.albumGet = (req, res) => {
	res.render("album");
};

exports.addGenreGet = (req, res) => {
	res.render("addGenre");
};
exports.addAlbumGet = (req, res) => {
	res.render("addAlbum");
};
// exports.usersGetNew = (req, res) => {
// 	res.render("form");
// };
