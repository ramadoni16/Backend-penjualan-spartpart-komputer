const mongoose = require("mongoose");

const TransaksiSchema = mongoose.Schema({
  username: {
    type: String,
  },
  namaSpartpart: {
    type: String,
  },
  spartpartLaptop: {
    type: String,
  },
  Harga: {
    type: String,
  },
  Jumlah: {
    type: String,
  },
  Total: {
    type: String,
  },
});

module.exports = mongoose.model("transaksi", TransaksiSchema);
