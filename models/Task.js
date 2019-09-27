const mongoose = require('mongoose')
mongoose.Promise = global.Promise
/**TODAY
 * ID
 * Title
 * Description
 * Priority (1-low, 2-medium, 3-high)
 * Status(1-in progress, 2-on hold )
 * Slug
 */

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: "Title cannot be empty"
    },
    Description: {
        type: String,
        trim: true,
        required: "Description cannot be empty"
    },
    Priority: {
        type: Number,
        trim: true,
        required: "Number cannot be empty"
    },
    Status: {
        type: Number,
        trim: true,
        required: "Number cannot be empty"
    },
    slug: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('Task', taskSchema)