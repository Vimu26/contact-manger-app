const { Schema, model } = require("mongoose");
const schemaValidationMiddleware = require("../middleware/schema-validation.middleware");

const userSchema = Schema(
  {
    user_name: {
      type: String,
      required: true,
      min: [5],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// userSchema.pre("save", schemaValidationMiddleware.usersSchemaValidation )

module.exports = new model("user", userSchema);
