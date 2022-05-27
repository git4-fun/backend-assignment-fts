const Book = require("../models/Book");


async function getRatingStatus(req, res) {
	const book = await Book.findOne({ title: req.params.book });
	const user = req.params.username;

	if (!book) {
		return res.json({
			status: false,
			message: "Book does not exist.",
			rating: null
		})
	}

	if (!book.raters.includes(user)) {
		return res.json({
			status: false,
			message: `User ${user} not in raters.`,
			rating: null
		})
	}

	return res.json({
		status: true,
		message: `User ${user} found in raters.`,
		rating: book.rating
	})
}

module.exports = getRatingStatus