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

async function getGenreById(id) {
	const { rows } = await pool.query(
		"SELECT album.name, album.id_album, album.artist, album.year, album.price, album.img_url,\
        genre.name AS genre_name FROM album\
        INNER JOIN genre ON album.genre_id = genre.id_genre WHERE album.genre_id = $1;",
		[id]
	);
	return rows;
}

async function addGenre(name) {
	await pool.query("INSERT INTO genre (name) VALUES ($1)", [name]);
}

async function getGenresList() {
	const { rows } = await pool.query("SELECT * FROM genre");
	return rows; //id_genre, name
}

async function addAlbum(
	albumName,
	artistName,
	albumGenre,
	albumYear,
	albumPrice,
	albumImgUrl,
	albumDesc
) {
	await pool.query(
		"INSERT INTO album (name, artist, genre_id, year, price, img_url, description)\
         VALUES ($1, $2, $3, $4, $5, $6, $7)",
		[
			albumName,
			artistName,
			albumGenre,
			albumYear,
			albumPrice,
			albumImgUrl,
			albumDesc,
		]
	);
}

module.exports = {
	getAllAlbums,
	getAllGenres,
	getAlbumById,
	getGenreById,
	addGenre,
	getGenresList,
	addAlbum,
};
