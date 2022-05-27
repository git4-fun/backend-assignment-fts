const Book = require("../models/Book");


async function addRating(req, res) {
	const book = await Book.findOne({ title: req.params.book });
	const user = req.params.username;
	const rate = Number(req.params.rate);

	if (!book) {
		return res.json({
			status: false,
			message: "Book does not exist."
		})
	}

	if (book.raters.includes(user)) {
		return res.json({
			status: false,
			message: `User ${user} has already rated this book.`
		})
	}

	if (rate < 1) {
		return res.json({
			status: false,
			message: 'Rating has to be greater than 1.'
		})
	}

	book.rating = (book.rating * book.ratersNumber + rate) / (book.ratersNumber + 1);
	book.ratersNumber += 1;
	book.raters.push(user);

	await book.save();

	return res.json({
		status: true,
		message: 'Rating updated successfully.'
	})
}

module.exports = addRating