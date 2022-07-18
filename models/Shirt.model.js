const { Schema, model } = require("mongoose")

const shirtSchema = new Schema(
    {
        shirtName: {
            type: String,
            required: [true, 'You must write the name of the shirt.']
        },

        originCountry: {
            type: [String],
            enum: ["Africa", "America", "Europe", "Asia", "Oceania"],
            required: [true, 'You must fill the autoctonous region of the shirt.']
        },

        style: {
            type: [String],
            required: [true, 'You must write the shirt style.']
        },

        colour: {
            type: [String],
            required: [true, 'You must write the shirt colour']
        },

        files: {
            type: [String]
        },

        imageURL: {
            type: [String]
        },

        fabric: {
            type: [String],
            required: [true, 'You must write the shirt fabric']
        },

        price: {
            type: [Number],
            required: [true, 'You must write the price of the shirt']
        },

        sizes: {
            type: [String],
            enum: ["S", "M", "L", "XL"],
            required: [true, 'You must fill the sizes of the shirt.']
        },

        description: {
            type: String,
            required: [true, 'You must fill the description of the shirt.']
        },

    },
    {
        timestamps: true,
    }
)

const Shirt = model("Shirt", shirtSchema)
module.exports = Shirt