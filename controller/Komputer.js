const Komputer = require('../model/Komputer.js')
const response = require('../config/response')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

exports.inputDataSpartpart = (data, gambar) =>
    new Promise(async (resolve, reject) => {

        const spartpartBaru = new Komputer({
            kodeSpartpart: data.kodeSpartpart,
            namaSpartpart: data.namaSpartpart,
            tahunPembuatan: data.tahunPembuatan,
            madeIn: data.madeIn,
            spartpartLaptop: data.spartpartLaptop,
            hargaSpartpart: data.hargaSpartpart,
            gambar: gambar
        })

        await Komputer.findOne({ kodeSpartpart: data.kodeSpartpart })
            .then(Komputer => {
                if (Komputer) {
                    reject(response.commonErrorMsg('Kode Spartpart Sudah Digunakan'))
                } else {
                    spartpartBaru.save()
                        .then(r => {
                            resolve(response.commonSuccesrMsg('Berhasil menginput data'))
                        }).catch(err => {
                            reject(response.commonErrorMsg('Mohon Maaf Input Spartpart gagal'))
                        })
                }
            }).catch(err => {
                reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server kami'))
            })
    })
exports.lihatDataSpartpart = () =>
    new Promise(async (resolve, reject) => {
        Komputer.find({})
            .then(result => {
                resolve(response.commonResult(result))
            })

            .catch(() => reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server kami')))
    })

exports.lihatDetailDataSpartpart = (kodeSpartpart) =>
    new Promise(async (resolve, reject) => {
        await Komputer.findOne({ kodeSpartpart: kodeSpartpart })
            .then(result => {
                resolve(response.commonResult(result))
            })

            .catch(() => reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server kami')))
    })

exports.updateSpartpart = (id, data, gambar) =>
    new Promise(async (resolve, reject) => {
        await Komputer.updateOne(
            { _id: ObjectId(id) },
            {
                $set: {
                    kodeSpartpart: data.kodeSpartpart,
                    namaSpartpart: data.namaSpartpart,
                    tahunPembuatan: data.tahunPembuatan,
                    madeIn: data.madeIn,
                    spartpartLaptop: data.spartpartLaptop,
                    hargaSpartpart: data.hargaSpartpart,
                    gambar: gambar

                }
            }
        ).then(Komputer => {
            resolve(response.commonSuccesrMsg('Berhasil mengubah data'))
        }).catch(err => {
            reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server kami'))

        })
    })

exports.hapusspartpart = (_id) =>
    new Promise(async (resolve, reject) => {
        await Komputer.remove({ _id: ObjectId(_id) })
            .then(() => {
                resolve(response.commonSuccesrMsg('Berhasil menghapus data'))
            }).catch(() => {
                reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan pada Server kami'))
            })
    })