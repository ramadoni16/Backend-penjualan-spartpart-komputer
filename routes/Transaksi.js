const router = require('express').Router()
const Order = require('../controller/Transaksi')

router.post('/insert', (req, res) => {
  console.log(req.body)
  Order.transaksi(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})

router.get("/lihatTransaksi", (req, res) => {
  Order.getAll()
  .then((result) => res.json(result))
  .catch((err) => res.json(err))
})

router.get('/dataTransaksi/:userName', (req, res) => {
  console.log(req.params.userName)
  Order.getTransaksiByIdUSer(req.params.userName)
  .then((result) => res.json(result))
  .catch((err) => res.json(err))
})

router.put('/ubah/:id', (req, res) => {
  console.log(req.params.id)
  Order.ubahTransaksi(req.params.id, req.body)
  .then((result) => res.json(result))
  .catch((err) => res.json(err))
})

router.delete('/hapus/:id', (req, res) => {
  Order.hapusTransaksi(req.params.id)
  .then((result) => res.json(result))
  .catch((err) => res.json(err))
})

module.exports = router