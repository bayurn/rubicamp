const dataModel = require('./models/model');

const getData = (req, res, next) => {

    let {
        checkString,
        checkInteger,
        checkFloat,
        checkDate,
        checkBoolean,
        inputString,
        inputInteger,
        inputFloat,
        inputDate,
        inputBoolean
    } = req.query
    let searchQuery = {}

    if (checkString && inputString) {
        searchQuery.string = req.query.inputString
    }
    if (checkInteger && inputInteger) {
        searchQuery.integer = req.query.inputInteger
    }
    if (checkFloat && inputFloat) {
        searchQuery.float = req.query.inputFloat
    }
    if (checkDate && inputDate) {
        searchQuery.date = req.query.inputDate
    }
    if (checkDate) {
        searchQuery.date = { $gte: req.query.starDate, $lte: req.query.endDate }
    }
    if (checkBoolean && inputBoolean) {
        searchQuery.boolean = req.query.inputBoolean
    }
    // filter

    const page = req.query.page || 1;
    const limit = 4;
    const offset = (page - 1) * limit;
    const url = req.url === '/' ? '/?page=1' : req.url;

    dataModel.find(searchQuery, (err, data) => {
        let totalData = data.length
        dataModel.find(searchQuery, (err, data) => {
            if (err) res.json(err);

            res.json({
                result: data,
                url,
                page,
                pages: Math.ceil(totalData / limit),
                query: req.query
            })
        }).skip(offset).limit(limit)
    })
}

const addData = (req, res, next) => {
    dataModel.create(req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
}

const editData = (req, res, next) => {
    dataModel.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
        if (err) return next(err)
        res.json(post)
    })
}

const deleteData = (req, res, next) => {
    dataModel.findByIdAndRemove(req.params.id, req.body, (err, post) => {
        if (err) return next(err)
        res.json(post)
    })
}

const getOne = (req, res, next) => {
    dataModel.findById(req.params.id, (err, data) => {
        if (err) return next(err)
        res.json({
            result: data
        })
    })
}

module.exports = {
    getData,
    addData,
    getOne,
    editData,
    deleteData
}