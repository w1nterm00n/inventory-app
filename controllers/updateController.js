const { updateGenreById } = require("../db/queries.js");

exports.updateGenre = async (id, req, res) => {
	const { genreName } = req.body;
	let updates = { name: genreName };
	await updateGenreById(id, updates);
};
