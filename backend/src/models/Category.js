const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
    {
        name : {
            type: String,
            required: true,
        },
    },
    { timessamps: true }
    );

module.exports = mongoose.model('Categoty', CategorySchema);
