const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required.']
    },

    username: {
      type: String,
      unique: true,
      required: [true, 'Username is required.']
    },

    password: {
      type: String
    },

    role: {
      type: String,
      enum: ['ADMIN', 'CLIENT'], //Staff??
      default: 'CLIENT'
    },

    address: {
      type: String,
      required: [true, 'Address is required']
    },

    dateOfBirth: {
      type: Date
    },

    clientSize: {
      type: [String],
      enum: ["S", "M", "L", "XL"],
      required: [true, 'You must choose the sizes of the shirt.']
    },

    favouriteShirt: [{
      type: Schema.Types.ObjectId,
      ref: 'Shirt'
    }],

    //suscription or delivery?? //booleano
    isSuscribed: {
      type: Boolean,
      default: false
    },

    //creditCard??

  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema)

module.exports = User
