const mongoose = require('mongoose')
const marked = require('marked');
const slugify = require('slugify')
const createDomPurifier = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurifier(new JSDOM().window)

const recipeSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    difficulty: {
      type: String
    },
    description: {
        type: String
      },
    ingredients: {
      type: String,
      required: true
    },
    instructions: {
        type: String,
        required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    sanitizedIngredients: {
        type: String,
        required: true
    },
    sanitizedInstructions: {
        type: String,
        required: true
    }
})

recipeSchema.pre('validate', function(next) {
    if (this.title) {
      this.slug = slugify(this.title, { lower: true, strict: true })
    }
    if (this.ingredients) {
        this.sanitizedIngredients = dompurify.sanitize(marked.parse(this.ingredients))
    }
    if (this.instructions) {
        this.sanitizedInstructions = dompurify.sanitize(marked.parse(this.instructions))
    }
    next()
  })



module.exports = mongoose.model('Recipe', recipeSchema)