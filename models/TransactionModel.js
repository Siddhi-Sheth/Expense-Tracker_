const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
  {
    userid: {
      type:String,
      required: [true]
    },
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    type : {
      type: String,
      requied : [true, "Type is required"]
    },
    category: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "desc is required"],
    },
    date: {
      type: Date,
      required: [true, "date is required"],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("transactions", TransactionSchema);
module.exports = transactionModel;