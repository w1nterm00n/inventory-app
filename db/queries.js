const pool = require("./pool");

async function getAllAlbums() {
	const { rows } = await pool.query(
		"SELECT album.id_album, album.name, album.artist, album.year, album.price, album.img_url, genre.name AS genre_name FROM album INNER JOIN genre ON album.genre_id = genre.id_genre;"
	);
	return rows;
}

async function getAllGenres() {
	const { rows } = await pool.query(
		"SELECT genre.name, genre.id_genre, COUNT(album.id_album) AS album_count\
        FROM genre\
        LEFT JOIN album ON genre.id_genre = album.genre_id\
        GROUP BY genre.name, genre.id_genre;"
	);
	return rows;
}

async function getAlbumById(id) {
	const { rows } = await pool.query("SELECT * FROM album WHERE id_album = $1", [
		id,
	]);
	return rows[0];
}

async function getGenreById(id) {
	const { rows } = await pool.query(
		"SELECT album.name, album.id_album, album.artist, album.year, album.price, album.img_url,\
        genre.name AS genre_name FROM album\
        INNER JOIN genre ON album.genre_id = genre.id_genre WHERE album.genre_id = $1;",
		[id]
	);
	return rows;
}

module.exports = {
	getAllAlbums,
	getAllGenres,
	getAlbumById,
	getGenreById,
};
