module.exports = {

    commonError: {
        error: true,
        msg: 'Terjadi Kesalahan Pada Server'
    },
    commonErrorMsg: (msg) => {
        return {
            error: true,
            msg: msg
        }
    },
    commonSucces: {
        error: false,
        msg: 'Berhasil Memuat Permintaan'
    },
    commonSuccesrMsg: (msg) => {
        return {
            error: false,
            msg: msg
        }
    },
    commonResult: (data) => {
        return {
            error: false,
            msg: 'Berhasil Memuat Data',
            data: data
        }
    }

};