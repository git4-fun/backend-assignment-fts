const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let bookSchema = new Schema(
	{
		title: {
			type: String,
			required: [true, 'Please provide title'],
			unique: true
		},
		author: {
			type: String,
			required: [true, 'Please provide author']
		},
		rating: {
			type: Number,
			default: 0
		},
		ratersNumber: {
			type: Number,
			default: 0
		},
		raters: {
			type: [String]
		}
	}
)

let Book = mongoose.model("Book", bookSchema);
module.exports = Book;