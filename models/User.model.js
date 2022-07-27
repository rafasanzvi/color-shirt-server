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
      required: [true, 'Username is required.']
    },

    name: {
      type: String,
      required: [true, 'Name is required.']
    },

    password: {
      type: String
    },

    role: {
      type: String,
      enum: ['ADMIN', 'CLIENT'],
      default: 'CLIENT'
    },

    address: {
      type: String,
    },

    dateOfBirth: {
      type: Date,
      default: Date.now()
    },

    clientSize: {
      type: [String],
      enum: ["S", "M", "L", "XL"],
    },

    favouriteShirts: [{
      type: Schema.Types.ObjectId,
      ref: 'Shirt'
    }],

    images: {
      type: [String]
    },

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
