const Book = require("../models/Book");

async function getBook(req, res) {
	const book = await Book.findOne({ title: req.params.title });
	if (!book) {
		return res.json({
			status: false,
			message: 'Book not found',
			details: null
		})
	}
	return res.json({
		status: true,
		details: book
	})
}

module.exports = getBook