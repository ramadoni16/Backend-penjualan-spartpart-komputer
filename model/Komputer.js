const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  kodeSpartpart: {
    type: String,
  },
  namaSpartpart: {
    type: String,
  },
  tahunPembuatan: {
    type: String,
  },
  madeIn: {
    type: String,
  },
  spartpartLaptop: {
    type: String,
  },
  hargaSpartpart: {
    type: String,
  },
  gambar: {
    type: String,
  },
});

module.exports = mongoose.model("komputer", userSchema);
