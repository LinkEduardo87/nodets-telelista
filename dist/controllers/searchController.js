"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const com_1 = require("../models/com");
const createMenuObject_1 = require("../helpers/createMenuObject");
const search = (req, res) => {
    let query = req.query.q;
    if (!query) {
        res.redirect('/');
        return;
    }
    let list = com_1.Com.getFromName(query);
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)(''),
        list,
        query
    });
};
exports.search = search;
